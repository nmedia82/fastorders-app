/** @format */

import React from "react";
import { Col, Container, Row } from "reactstrap";
import { P } from "../../AbstractElements";
import { Globe } from "react-feather";
import FooterLanguage from "./FooterLanguage";

export default function FooterLayout() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="gy-1">
          <Col
            lg={12}
            md={7}
            className="footer-copyright"
            style={{ textAlign: "center" }}>
            <P className="mb-0 f-light f-w-500">
              {"Copyright 2024 © getorder.pk, Developed by N-Media."}
            </P>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
