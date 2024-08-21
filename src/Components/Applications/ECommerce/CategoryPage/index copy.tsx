import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ProductListHeader from "../Common/ProductListHeader";
import CategoryListTable from "../../../../Pages/Categories/CategoryListTable";

export default function CategoryContainer() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody>
              <ProductListHeader linkTitle="Add Category" />
              {/* <CategoryListTable /> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
