import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import ProductListHeader from "../Common/ProductListHeader";
import TableList from "./TableList";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";

export default function Tables() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Tables" />
              <CardBody>
                <ProductListHeader linkTitle="Add Category" />
                <TableList />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
