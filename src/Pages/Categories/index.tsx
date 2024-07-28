import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CategoryListHeader from "./CategoryListHeader";
import CategoryListTable from "./CategoryListTable";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";

export default function ProductCategories() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Categories" />

              <CardBody>
                <CategoryListHeader />
                <CategoryListTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
