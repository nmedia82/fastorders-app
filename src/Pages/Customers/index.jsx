import React from "react";
import { Container, Row } from "reactstrap";

import CustomerForm from "./VerticalValidationWizard";

export default function AddCustomers() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <CustomerForm />
        </Row>
      </Container>
    </div>
  );
}
