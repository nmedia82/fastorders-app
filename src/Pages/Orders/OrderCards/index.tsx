import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { X } from "react-feather";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import { Btn, H6, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Utils";
import { Dollar, Href } from "../../../Utils/Constants";
import { orderHistoryData } from "../DatatableOrderHistory/OrderHistoryData";
import { useSelector } from "react-redux";
import { getFormattedDate, getFormattedPrice } from "../../../services/helper";
import { NavLink } from "react-router-dom";

export default function OrderCards() {
  // Selector to get orders from state
  const { allOrders, allOrderStatuses } = useSelector(
    (state: any) => state.orders
  );

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={"Takeaway"} />
        <CardBody>
          <Row className="g-sm-4 g-3">
            {allOrders
              .filter((item: any) => item.order_type === "take-away")
              .map((item: any) => (
                <Col xl={4} md={6} key={item.id}>
                  <div className="prooduct-details-box">
                    <div className="d-flex">
                      <div className="flex-grow-1 ms-3">
                        <div className="product-id d-flex align-items-center">
                          <H6>
                            <NavLink to={`/invoice/${item.id}`}>{`Order # ${
                              item.id
                            } / ${getFormattedDate(item.date)}`}</NavLink>
                          </H6>
                          <Btn
                            color={item.color}
                            size="xs"
                            style={{ marginLeft: "auto", position: "unset" }}
                          >
                            {item.order_status}
                          </Btn>
                        </div>
                        <div className="product-name mt-2"></div>

                        <div className="price d-flex">
                          <div className="text-muted">{"Amount"}</div>:
                          {` ${getFormattedPrice(item.grandTotal)}`}
                        </div>
                        <div className="avaiabilty d-flex justify-content-even align-items-center mt-2">
                          {Object.keys(allOrderStatuses)
                            .filter((s: any) => s !== item.order_status)
                            .map((status: any) => (
                              <Btn
                                className="btn-square"
                                key={status}
                                color="primary"
                                size="sm"
                                style={{
                                  position: "unset",
                                  marginRight: 5,
                                }}
                              >
                                {allOrderStatuses[status]}
                              </Btn>
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
}
