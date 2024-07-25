import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { P } from "../../AbstractElements";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import MainDashboard from "./MainDashboard";

export default function DashBoard() {
  return (
    <div className="page-body main-project">
      <MainDashboard />
    </div>
  );
}
