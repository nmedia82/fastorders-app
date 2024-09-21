/** @format */

import React, { useState } from "react";
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
import NMForm from "../../../../Components/NM/NMForm";
import { UpdatePWDConfig } from "./updatePasswordFormConfig";
import { useSSR } from "react-i18next";

export default function UserProfile() {
  const [PasswordChange, setPasswordChange] = useState({});

  const handleUpdatePassword = (key: any, value: any) => {
    // console.log(name, value);
    setPasswordChange((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleChangePassword = () => {
    console.log(PasswordChange);
  };

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

              <NMForm
                formKey="password_change"
                formData={PasswordChange}
                formConfig={UpdatePWDConfig()}
                onFormChange={handleUpdatePassword}
              />

              <div className="form-footer" onClick={handleChangePassword}>
                <Btn color="primary">{Save}</Btn>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
