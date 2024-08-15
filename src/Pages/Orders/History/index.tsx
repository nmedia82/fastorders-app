import React, { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../ReduxToolkit/Store";
import {
  fetchOrders,
  fetchOrderStatuses,
} from "../../../ReduxToolkit/Reducers/OrdersReducer";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import OrdersTable from "./OrdersDataTable";

export default function OrdersHistory() {
  const dispatch = useDispatch<AppDispatch>();

  // Fetch orders on component mount
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchOrderStatuses());
  }, [dispatch]);

  return (
    <div className="page-body">
      <OrdersTable />
    </div>
  );
}
