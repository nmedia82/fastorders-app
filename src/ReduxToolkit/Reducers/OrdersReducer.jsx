import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAPIURL, getVendorID } from "../../services/helper";

const api_url = getAPIURL();
const vendor_id = getVendorID();

// Fetch order statuses from the API
export const fetchOrderStatuses = createAsyncThunk(
  "orders/fetchOrderStatuses",
  async () => {
    const response = await axios.get(`${api_url}/get-order-statuses`);
    return response.data;
  }
);

// Fetch orders from the API
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get(
    `${api_url}/get-orders?vendor_id=${vendor_id}`
  );
  return response.data;
});

const initialState = {
  allOrders: [],
  currentOrders: [],
  allOrderStatuses: [],
  isLoading: false,
};

const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOrderStatus: (state, action) => {
      const updatedOrder = action.payload;

      // Update allOrders
      state.allOrders = state.allOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      );

      // Update currentOrders as well, assuming you only want non-completed orders here
      state.currentOrders = state.allOrders.filter(
        (order) => order.order_status !== "completed"
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.allOrders = action.payload.data;
      state.currentOrders = action.payload.data.filter(
        (order) => order.order_status != "completed"
      );
    });
    builder.addCase(fetchOrderStatuses.fulfilled, (state, action) => {
      state.allOrderStatuses = action.payload;
    });
  },
});

export const { setOrders, setOrderStatus, setLoading } = OrdersSlice.actions;
export default OrdersSlice.reducer;
