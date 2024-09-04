/** @format */

import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { Badges, H2 } from "../../../../AbstractElements";
import { Href, ProjectsStatusTitle } from "../../../../Utils/Constants";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { recentOrder, recentOrderData } from "./Data/RecentOrder";
import {
  RecentActivities,
  RecentActivitiesData,
} from "./Data/RecentActivities";
import { useSelector } from "react-redux";
import {
  getFormattedDate,
  getFormattedPrice,
} from "../../../../services/helper";
import DashboardRecentActivities from "./RecentActivities";

interface Order {
  id: number;
  date: string;
  order_status: string;
  order_type: string;
  grandTotal: string;
}

const statusColors: { [key: string]: string } = {
  completed: "success",
  billed: "warning",
  delivered: "info",
  cancelled: "danger",
  placed: "primary",
  processing: "secondary",
};

const typeColors: { [key: string]: string } = {
  "home-delivery": "success",
  "take-away": "info",
  pos: "warning",
  "dine-in": "primary",
};

// Custom Badge Component
const CustomBadge = ({
  span,
  color,
  spanClass,
}: {
  span: string;
  color: string;
  spanClass?: string;
}) => (
  <Badges color={`light-${color}`} className={`txt-${color} ${spanClass}`}>
    {span}
  </Badges>
);

export default function DashboardRecentOrders() {
  const { allOrders } = useSelector((state: any) => state.orders);

  const recentOrders = allOrders.slice(-5);
  let recentOrderData: Order[] = recentOrders;

  recentOrderData = recentOrders.map((order: Order) => ({
    ...order,
    grandTotal: getFormattedPrice(order.grandTotal),
    date: getFormattedDate(order.date),
    typeBadge: (
      <CustomBadge
        span={order.order_type}
        color={typeColors[order.order_type] || "secondary"}
      />
    ),
    statusBadge: (
      <CustomBadge
        span={order.order_status}
        color={statusColors[order.order_status] || "secondary"}
      />
    ),
  }));

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
          <CardBody className="p-2">
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
          <CardBody className="p-0">
            <DashboardRecentActivities />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
