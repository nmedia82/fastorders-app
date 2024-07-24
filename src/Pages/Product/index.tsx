import React from "react";
import ProductContainer from "../../Components/Applications/ECommerce/Product";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import { P } from "../../AbstractElements";
import ProductGrid from "../../Components/Applications/ECommerce/Product/ProductGrid";

export default function Product() {
  return (
    <div className="page-body">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card className="title-line">
              <CommonCardHeader title={"Products"} />
              <CardBody>
                <ProductGrid />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
