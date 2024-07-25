import React from "react";
import { Col, Form, Input, Row } from "reactstrap";
import { bankName, paymentOption, selectDuration } from "../../../../Pages/Common/Product";
import { dynamicImage, dynamicNumber } from "../../../../Utils";
import { Btn, Image, LI, UL } from "../../../../AbstractElements";

export default function EmiForm() {
  return (
    <Form className="theme-form">
      <Row className="g-3">
        <Col sm={6} className="p-r-0">
          <Input type="text" placeholder="First Name" />
        </Col>
        <Col sm={6}>
          <Input type="text" placeholder="Last Name" />
        </Col>
        <Col xxl={6} className="p-r-0">
          <Input type="number" placeholder="Pincode" />
        </Col>
        <Col xxl={6}>
          <Input type="select" size={1}>
            {bankName.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </Input>
        </Col>
        <Col xs={12}>
          <Input type="select" size={1}>
            <option>{"Select Card"}</option>
            {dynamicNumber(5).map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </Input>
        </Col>
        <Col xs={12}>
          <Input type="select" size={1}>
            {selectDuration.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </Input>
        </Col>
        <Col xs={12}>
          <UL className="payment-opt simple-list flex-row">
            {paymentOption.map((item, index) => (
              <LI key={index}>
                <Image src={dynamicImage(`ecommerce/${item}.png`)} alt="" />
              </LI>
            ))}
          </UL>
        </Col>
        <Col xs={12}>
          <Btn color="primary">{"Submit"}</Btn>
        </Col>
      </Row>
    </Form>
  );
}
