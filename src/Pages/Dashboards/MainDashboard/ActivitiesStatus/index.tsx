/** @format */

import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { H2 } from "../../../../AbstractElements";
import { Href, ProjectsStatusTitle } from "../../../../Utils/Constants";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { recentOrder, recentOrderData } from "./Data/RecentOrder";
import {
  RecentActivities,
  RecentActivitiesData,
} from "./Data/RecentActivities";
export default function ActivitiesStatus() {
  return (
    <Row>
      {/* First Column */}
      <Col md="6">
        <Card className="height-equal title-line overflow-hidden">
          <CardHeader className="card-no-border">
            <div className="header-top">
              <H2>{"Recent Orders"}</H2>
              <div className="card-header-right-icon">
                <a className="link-with-icon" href="/orders-history">
                  {"View all"}
                  <SvgIcon iconId="arrow-two-tone" />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardBody className="project-table p-0">
            <DataTable
              className="custom-scrollbar"
              data={recentOrderData}
              columns={recentOrder}
            />
          </CardBody>
        </Card>
      </Col>

      {/* Second Column */}
      <Col md="6">
        <Card className="height-equal title-line overflow-hidden">
          <CardHeader className="card-no-border">
            <div className="header-top">
              <H2>{"Activities "}</H2>
              <div className="card-header-right-icon">
                <a className="link-with-icon" href="/activities">
                  {"View all"}
                  <SvgIcon iconId="arrow-two-tone" />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardBody className="project-table p-0">
            {/* Add your second DataTable or other content here */}
            <DataTable
              className="custom-scrollbar"
              data={RecentActivitiesData}
              columns={RecentActivities}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
