import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { P } from "../../AbstractElements";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import MainDashboard from "./MainDashboard";
import { useDispatch } from "react-redux";
import { fetchDashboardReports } from "../../ReduxToolkit/Reducers/AppReducer";

export default function DashBoard() {
  const dispatch = useDispatch();

  dispatch(fetchDashboardReports("last_24_hours"));
  return (
    <div className="page-body main-project">
      <MainDashboard />
    </div>
  );
}
