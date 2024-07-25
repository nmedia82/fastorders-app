import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ProductListHeader from "./ProductListHeader";
import ProductListTable from "./ProductList";

export default function ProductListContainer() {
  return (
    <div className="page-body main-project">
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
    </div>
  );
}
