import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import { H6 } from "../../../AbstractElements";
import { getFormattedDate, getFormattedPrice } from "../../../services/helper";
import { NavLink } from "react-router-dom";
import StatusButton from "./StatusButton";

interface OrdersListProps {
  allOrders: any;
  allOrderStatuses: any;
  onOrderStatusChange: (orderId: number, status: string) => void;
  orderType: string;
  title: string;
}

const OrdersCards: React.FC<OrdersListProps> = ({
  allOrders,
  allOrderStatuses,
  onOrderStatusChange,
  orderType,
  title,
}) => {
  const filteredOrders = allOrders.filter(
    (item: any) => item.order_type === orderType
  );

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={`${title} (${filteredOrders.length})`} />
        <CardBody>
          <Row className="g-sm-4 g-3">
            {filteredOrders.map((item: any) => (
              <Col xl={4} md={6} key={item.id}>
                <div className="prooduct-details-box">
                  <div className="d-flex">
                    <div className="flex-grow-1 ms-3">
                      <div className="product-id d-flex align-items-end justify-content-between">
                        <H6>
                          <NavLink to={`/invoice/${item.id}`}>{`Order # ${
                            item.id
                          } / ${getFormattedDate(item.date)}`}</NavLink>
                        </H6>
                        <StatusButton
                          status={item.order_status}
                          isCurrent={true}
                        />
                      </div>
                      <div className="product-name mt-2"></div>

                      <div className="price d-flex">
                        <div className="text-muted">{"Amount"}</div>:
                        {` ${getFormattedPrice(item.grandTotal)}`}
                      </div>
                      <div
                        style={{ gap: "1px" }}
                        className="avaiabilty d-flex justify-content-even align-items-center mt-2"
                      >
                        {Object.keys(allOrderStatuses)
                          .filter((s: any) => s !== item.order_status)
                          .map((status: any) => (
                            <StatusButton
                              key={status}
                              status={allOrderStatuses[status]}
                              onClick={() =>
                                onOrderStatusChange(item.id, status)
                              }
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrdersCards;
