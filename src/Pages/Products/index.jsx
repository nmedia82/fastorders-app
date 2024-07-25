import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ProductListHeader from "../Common/ProductListHeader";
import ProductListTable from "./ProductList";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";

export default function ProductListContainer() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
            <CommonCardHeader title="All Products" />

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
