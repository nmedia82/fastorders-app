import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  fetchOrderStatuses,
} from "../../ReduxToolkit/Reducers/OrdersReducer";
import CurrentOrders from "./CurrendOrders";

export default function AllOrders() {
  const dispatch = useDispatch();

  // Fetch orders on component mount
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchOrderStatuses());
  }, [dispatch]);

  return (
    <div className="page-body main-project">
      <Row>
        <CurrentOrders />
      </Row>
    </div>
  );
}
