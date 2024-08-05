import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { X } from "react-feather";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import { Btn, H6, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Utils";
import { Dollar, Href } from "../../../Utils/Constants";
import { orderHistoryData } from "../DatatableOrderHistory/OrderHistoryData";

export default function OrderCards() {
  const [closedCards, setClosedCards] = useState<number[]>([]);
  const toggleCard = (index: number) => {
    setClosedCards((prevClosedCards) =>
      prevClosedCards.includes(index)
        ? prevClosedCards.filter((item) => item !== index)
        : [...prevClosedCards, index]
    );
  };
  const isCardClosed = (index: number) => closedCards.includes(index);
  return (
    <Col sm={12}>
      {orderHistoryData.map((item) => (
        <Card key={item.id}>
          <CommonCardHeader title={item.heading} />
          <CardBody>
            <Row className="g-sm-4 g-3">
              {item.details.map((product) => (
                <Col xl={4} md={6} key={product.id}>
                  {!isCardClosed(product.id) && (
                    <div className="prooduct-details-box">
                      <div className="d-flex">
                        <div className="flex-grow-1 ms-3">
                          <div className="product-id">
                            <H6>
                              <a href={Href}>{product.id}</a>
                            </H6>
                          </div>
                          <div className="product-name mt-2" >
                            <H6>
                              <a href={Href}>{product.name}</a>
                            </H6>
                          </div>

                          <div className="price d-flex">
                            <div className="text-muted me-2">{"Price"}</div>: {Dollar}
                            {product.price}
                          </div>
                          <div className="avaiabilty">
                            <Btn color={product.color} size="xs" style={{ position: "unset" }}>
                              {product.avaiabilty}
                            </Btn>
                          </div>
                          <div className="d-flex flex-column align-items-end mt-2">
                            <Btn color="success" size="sm" style={{ marginBottom: 35 }}>
                              Completed
                            </Btn>
                            <Btn color="danger" size="sm">
                              Cancel
                            </Btn>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
}
