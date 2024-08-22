import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CategoryListTable from "./CategoryListTable";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import NewCategoryModal from "./AddCatogory";

export default function ProductCategories() {
  const [category, setCategory] = useState();
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Categories" />
              <CardBody>
                <div className="list-product-header">
                  <div>
                    <div>
                      <NewCategoryModal
                        category={category}
                        setCategory={setCategory}
                      />
                    </div>
                  </div>
                </div>
                <CategoryListTable setCategory={setCategory} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
