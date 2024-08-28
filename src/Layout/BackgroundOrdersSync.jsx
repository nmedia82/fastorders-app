import { useEffect } from "react";
import axios from "axios";
import { getAPIURL, getUserID, getVendorID } from "../services/helper";
import { getPOSRegisterID } from "../services/auth";
import { useSelector, useDispatch } from "react-redux";
import { setBackgroundSyncing } from "../ReduxToolkit/Reducers/AppReducer"; // Assuming you have an action like orderSynced
import { addNewOrder } from "../ReduxToolkit/Reducers/OrdersReducer";

// API endpoint
const api_url = getAPIURL();

// Function to fetch orders from localStorage
const getOrdersFromLocalStorage = () => {
  const orders = localStorage.getItem("getorders_pos_orders");
  return orders ? JSON.parse(orders) : [];
};

// Function to save orders back to localStorage
const saveOrdersToLocalStorage = (orders) => {
  localStorage.setItem("getorders_pos_orders", JSON.stringify(orders));
};

// Background sync function to send orders
const syncOrders = async (dispatch) => {
  let orders = getOrdersFromLocalStorage();

  if (orders.length > 0) {
    const order = {
      ...orders[0],
      register_id: getPOSRegisterID(),
      vendor_id: getVendorID(),
      biller_id: getUserID(),
    }; // Get the first unsent order

    console.log(order);

    try {
      console.log("sending to server");
      // Send order to the server
      const response = await axios.post(`${api_url}/create-pos-order`, order);

      if (response.status === 200) {
        // Order was successfully sent, remove it from the queue
        orders.shift(); // Remove the first order
        saveOrdersToLocalStorage(orders);
        console.log("Order sent successfully:", order);

        const { data: new_order } = response;
        // Dispatch a success event after the order is synced
        dispatch(addNewOrder(new_order.data)); // You can dispatch your custom action here
        dispatch(setBackgroundSyncing(false));
      }
    } catch (error) {
      // Handle errors (e.g., network issues), retry in the next cycle
      console.error("Error sending order:", order, error);
    }
  }
};

export default function BackgroundOrdersSync() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Start the background sync process
    const interval = setInterval(() => {
      dispatch(setBackgroundSyncing(true)); // Update the background syncing state
      syncOrders(dispatch); // Pass the dispatch function to syncOrders
    }, 5000); // Sync every 5 seconds (adjust as needed)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  return null; // No UI component needed for background sync
}
