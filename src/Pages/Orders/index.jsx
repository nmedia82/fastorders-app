import React from "react";
import { Container, Row } from "reactstrap";
import OrderCards from "./OrderCards";
import DatatableOrderHistory from "./DatatableOrderHistory";

export default function AllOrders() {
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
