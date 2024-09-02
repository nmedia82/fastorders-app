import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import OrdersCards from "./OrdersCards";
import Loader from "../../../Layout/Loader";
import http from "../../../services/http";
import { getAPIURL } from "../../../services/helper";
import {
  setLoading,
  setOrderStatus,
} from "../../../ReduxToolkit/Reducers/OrdersReducer";
import OrdersFilter from "./Filters";
import { orderToCart } from "../../../ReduxToolkit/Reducers/CartReducer";
import { useNavigate } from "react-router-dom";

const CurrentOrders = () => {
  const { currentOrders, allOrderStatuses, isLoading } = useSelector(
    (state) => state.orders
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleOrderStatusChange = async (order_id, order_status) => {
    const api_url = getAPIURL();
    try {
      dispatch(setLoading(true));
      const { data: resp } = await http.post(`${api_url}/change-order-status`, {
        order_id,
        order_status,
      });
      if (resp.success) {
        dispatch(setLoading(false));
        dispatch(setOrderStatus(resp.data));

        // if billed then add to cart
        if (order_status === "billed") {
          navigate(`/pos/${order_id}`);
        }
      }
    } catch (e) {
      dispatch(setLoading(false));
      toast(e.message);
    }
  };

  const filteredOrders = currentOrders.filter((order) => {
    const matchType =
      filterType === "All" || order.order_type === filterType.toLowerCase();
    const matchStatus =
      filterStatus === "All" || order.order_status === filterStatus;

    return matchType && matchStatus;
  });

  const handleResetFilters = () => {
    setFilterType("All");
    setFilterStatus("All");
  };

  // Mapping of order types to titles
  const orderTypes = useMemo(() => {
    const types = {
      "take-away": "Take-away Orders",
      "dine-in": "Dine-in Orders",
      "home-delivery": "Home Delivery Orders",
      pos: "POS Orders",
    };

    // Count the number of orders per type
    const orderCounts = Object.keys(types).reduce((acc, type) => {
      acc[type] = filteredOrders.filter(
        (order) => order.order_type === type
      ).length;
      return acc;
    }, {});

    // Sort the order types based on the number of orders
    return Object.keys(types)
      .sort((a, b) => orderCounts[b] - orderCounts[a])
      .reduce((sortedTypes, key) => {
        sortedTypes[key] = types[key];
        return sortedTypes;
      }, {});
  }, [filteredOrders]);

  return (
    <div>
      {isLoading && <Loader />}

      <OrdersFilter
        filterType={filterType}
        setFilterType={setFilterType}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        allOrderStatuses={allOrderStatuses}
        handleResetFilters={handleResetFilters}
      />

      {Object.keys(orderTypes).map(
        (type) =>
          (filterType === type || filterType === "All") && (
            <OrdersCards
              key={type}
              allOrders={filteredOrders}
              allOrderStatuses={allOrderStatuses}
              onOrderStatusChange={handleOrderStatusChange}
              orderType={type}
              title={orderTypes[type]}
            />
          )
      )}
    </div>
  );
};

export default CurrentOrders;
