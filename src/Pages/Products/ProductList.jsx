import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { P } from "../../AbstractElements";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";

export const ProductList = () => {
  return (
    <Row>
      <Col md={12}>
        <Card className="title-line">
          <CommonCardHeader title={"Products"} />
          <CardBody>
            <P>Hi</P>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
