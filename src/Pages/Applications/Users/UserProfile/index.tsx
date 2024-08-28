/** @format */

import React from "react";
import { Card, CardBody, Col, Form, Input, Label, Row } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import {
  Bio,
  EmailAddress,
  MyProfileTitle,
  Password,
  Save,
  Website,
} from "../../../../Utils/Constants";
import { Btn, H3, H4, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Utils";

export default function UserProfile() {
  return (
    <Col xl={4}>
      <Card className="title-line">
        <CommonCardHeader titleClass="card-title mb-0" title={MyProfileTitle} />
        <CardBody>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row className="g-3">
              <Col xs={12}>
                <div className="profile-title">
                  <Image
                    className="img-70 rounded-circle"
                    alt=""
                    src={dynamicImage(`user/7.jpg`)}
                  />
                  <div className="flex-grow-1">
                    <H3 className="mb-1 f-w-600">{"Basil Ahmad"}</H3>
                    <P>{"Web Developer"}</P>
                  </div>
                </div>
              </Col>

              <Col xs={12}>
                <Label>{EmailAddress}</Label>
                <Input type="email" placeholder="your-email@domain.com" />
              </Col>
              <Col xs={12}>
                <Label>{"Enter New Password"}</Label>
                <Input type="password" defaultValue="password" />
              </Col>
              <Col xs={12}>
                <Label>{"Re-Typre New Password"}</Label>
                <Input type="password" defaultValue="password" />
              </Col>

              <div className="form-footer">
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#945bfa", color: "white" }}>
                  Save
                </button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
