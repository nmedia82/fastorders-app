import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import AddRegister from "./AddRegister";
import ListTable from "./ListTable";

export default function Registers() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Registers" />
              <CardBody>
                <div className="list-product-header">
                  <div>
                    <div>
                      <AddRegister />
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
