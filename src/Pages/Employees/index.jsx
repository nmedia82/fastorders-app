import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import EmployeesListHeader from "./EmployeesListHeader";
import EmployeesList from "./EmployeesList";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";

export default function AllEmployees() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="All Employees" />
              <CardBody>
                <EmployeesListHeader />
                <EmployeesList />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
