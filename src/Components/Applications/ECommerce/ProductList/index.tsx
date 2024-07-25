import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ProductListHeader from "../Common/ProductListHeader";
import ProductListTable from "./ProductListTable";

export default function ProductListContainer() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody>
              <ProductListHeader linkTitle="Add Product" />
              <ProductListTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
