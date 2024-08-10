import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import OrderCards from "./OrderCards";
import DatatableOrderHistory from "./DatatableOrderHistory";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  fetchOrderStatuses,
} from "../../ReduxToolkit/Reducers/OrdersReducer";

export default function AllOrders() {
  const dispatch = useDispatch();

  // Fetch orders on component mount
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchOrderStatuses());
  }, [dispatch]);

  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <OrderCards />
          <DatatableOrderHistory />
        </Row>
      </Container>
    </div>
  );
}
