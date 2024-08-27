import React from "react";
import { Card, CardBody } from "reactstrap";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import { H6 } from "../../../AbstractElements";
import { getFormattedDate, getFormattedPrice } from "../../../services/helper";
import { NavLink } from "react-router-dom";
import StatusButtons from "./StatusButton";
import "./OrdersCards.css"; // Import the CSS for responsive styles

interface OrdersListProps {
  allOrders: any;
  allOrderStatuses: { [key: string]: string };
  onOrderStatusChange: (orderId: number, status: string) => void;
  orderType: string;
  title: string;
}

// Choose relevant background and foreground colors for each status
const statusColors: { [key: string]: { bg: string; fg: string } } = {
  placed: { bg: "#e0f7fa", fg: "#00796b" }, // Light teal bg, dark teal fg
  processing: { bg: "#ffeb3b", fg: "#f57f17" }, // Yellow bg, dark orange fg
  delivered: { bg: "#4caf50", fg: "#ffffff" }, // Green bg, white fg
  billed: { bg: "#fbc02d", fg: "#212121" }, // Amber bg, dark fg
  completed: { bg: "#5cb85c", fg: "#ffffff" }, // Green bg, white fg
  cancelled: { bg: "#d9534f", fg: "#ffffff" }, // Red bg, white fg
};

const OrdersCards: React.FC<OrdersListProps> = ({
  allOrders,
  allOrderStatuses,
  onOrderStatusChange,
  orderType,
  title,
}) => {
  // Group orders by their current status
  const groupedOrders = allOrders
    .filter((o: any) => o.order_type === orderType)
    .reduce((acc: any, order: any) => {
      const status = order.order_status;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(order);
      return acc;
    }, {});

  console.log(groupedOrders);

  return (
    <div className="orders-container">
      <Card>
        <CommonCardHeader title={title} />
        <CardBody>
          {/* Flex container for all statuses in one row */}
          <div className="status-row">
            {Object.keys(allOrderStatuses)
              .filter((k) => k !== "completed" && k !== "cancelled")
              .map((statusKey: any) => (
                <div
                  key={statusKey}
                  className="status-column"
                  style={{
                    backgroundColor: statusColors[statusKey]?.bg || "#f9f9f9", // Dynamic background color for each status
                  }}
                >
                  {/* Status Title with Bold, Centered, Margin, and Color */}
                  <H6
                    className="status-title"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: "10px",
                      color: statusColors[statusKey]?.fg || "#333", // Dynamic foreground color
                    }}
                  >
                    {allOrderStatuses[statusKey]}
                  </H6>

                  {groupedOrders[statusKey] &&
                    groupedOrders[statusKey].map((item: any) => (
                      <div className="prooduct-details-box mb-2" key={item.id}>
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-3">
                            <div className="d-flex flex-column align-items-start justify-content-between">
                              <div
                                className="m-b-5"
                                style={{ minWidth: "100%" }}
                              >
                                <H6 className="d-flex justify-content-between">
                                  <span>{`#${item.id} / ${getFormattedDate(
                                    item.date
                                  )}`}</span>
                                  <NavLink
                                    to={`/invoice/${item.id}`}
                                    style={{
                                      color:
                                        statusColors[statusKey]?.fg || "#fff",
                                    }}
                                  >
                                    Invoice
                                  </NavLink>
                                </H6>
                                <div className="price d-flex">
                                  <div
                                    className="text-muted"
                                    style={{
                                      color:
                                        statusColors[statusKey]?.fg || "#fff",
                                    }}
                                  >
                                    {"Amount"}
                                  </div>
                                  {` ${getFormattedPrice(item.grandTotal)}`}
                                </div>
                              </div>

                              <StatusButtons
                                allOrderStatuses={allOrderStatuses}
                                item={item}
                                isCurrent={true}
                                onOrderStatusChange={onOrderStatusChange}
                              />
                            </div>
                            <div className="product-name mt-2"></div>

                            {/* Render all statuses in a single row */}
                            <div className="avaiabilty d-flex justify-content-even align-items-center mt-2"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrdersCards;
