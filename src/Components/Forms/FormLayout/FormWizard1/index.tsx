import React from "react";
import { Container, Row } from "reactstrap";
import NumberingWizard from "./NumberingWizard";
import StudentValidationForm from "./StudentValidationForm";
import VerticalValidationWizard from "../../../../Pages/Customers/VerticalValidationWizard";
import ShippingForm from "./ShippingForm";

export default function FormWizard1Container() {
  return (
    <Container fluid>
      <Row>
        <NumberingWizard />
        <StudentValidationForm />
        <VerticalValidationWizard />
        <ShippingForm />
      </Row>
    </Container>
  );
}
