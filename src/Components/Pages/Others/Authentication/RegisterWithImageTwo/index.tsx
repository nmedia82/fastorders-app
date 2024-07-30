import React from "react";
import { Col, Container, Row } from "reactstrap";
import RegisterForm from "../../../../../Pages/Auth/Register/RegisterForm";

export default function RegisterWithImageTwo() {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl={7} className="b-center bg-size p-0 loginImageBg1" />
        <Col xl={5} className="p-0">
          <div className="login-card login-dark">
            <RegisterForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
