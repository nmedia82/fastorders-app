/** @format */

import React from "react";
import { Container, Row } from "reactstrap";
import WelcomeCard from "./WelcomeCard";
import TotalOrders from "./TotalOrder";
import ActivitiesStatus from "./ActivitiesStatus";
import TotalSales from "./TotalSales";
import OrderProgress from "./OrderProgress";
import ShippingFee from "./ShippingFee";
import Discounts from "./Discounts";
import Refunds from "./Refunds";
import RefundsAmount from "./RefundAmount";
import NetProfit from "./NetProfit";

export default function MainDashboard() {
  return (
    <Container fluid>
      <Row>
        {/* <WelcomeCard /> */}
        <TotalOrders />
        <TotalSales />
        <OrderProgress />
        <ShippingFee />
        <Discounts />
        <Refunds />
        <RefundsAmount />
        <NetProfit />
        <ActivitiesStatus />
      </Row>
    </Container>
  );
}
