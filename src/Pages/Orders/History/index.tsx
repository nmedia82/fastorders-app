import React, { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Common/FilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../ReduxToolkit/Store";
import {
  fetchOrders,
  fetchOrderStatuses,
} from "../../../ReduxToolkit/Reducers/OrdersReducer";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import OrdersTable from "./Table";

const customOrderHistoryColumns = [
  {
    name: "Order ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Order Status",
    selector: (row: any) => row.order_status,
    sortable: true,
  },
  {
    name: "Order Type",
    selector: (row: any) => row.order_type,
    sortable: true,
  },
  {
    name: "Grand Total",
    selector: (row: any) => row.grandTotal,
    sortable: true,
  },
];

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
