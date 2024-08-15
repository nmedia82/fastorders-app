import React from "react";
import { Container, Row } from "reactstrap";
import WelcomeCard from "./WelcomeCard";
import TotalOrders from "./TotalOrder";
import ProjectsStatus from "./ProjectsStatus";
import TotalSales from "./TotalSales";
import OrderProgress from "./OrderProgress";

export default function MainDashboard() {
  return (
    <Container fluid>
      <Row>
        <WelcomeCard />
        <TotalOrders />
        <TotalSales />
        <OrderProgress />
        <ProjectsStatus />
      </Row>
    </Container>
  );
}
