import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import AddDiscount from "./AddDiscount";
import ListTable from "./ListTable";
import { useDispatch } from "react-redux";
import { fetchDiscounts } from "../../ReduxToolkit/Reducers/AppReducer";

export default function Discounts() {
  const dispatch = useDispatch();
  dispatch(fetchDiscounts());
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Discounts" />
              <CardBody>
                <div className="list-product-header">
                  <div>
                    <div>
                      <AddDiscount />
                    </div>
                  </div>
                </div>
                <ListTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
