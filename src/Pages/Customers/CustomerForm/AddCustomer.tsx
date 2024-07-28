import React, { FormEvent, useState, ChangeEvent } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FirstName, LastName, Phone } from "../../../Utils/Constants";
import { RegisterWizardForm } from "../../../Types/Others.type";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Btn, H1, H2, H6, Image, P } from "../../../AbstractElements";
import { dynamicImage } from "../../../Utils";
import {
  CreateAccount,
  DontHaveAccount,
  EmailAddress,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
} from "../../../Utils/Constants";
import SocialLink from "../../../Auth/SocialLink";

export default function AddCustomerForm({ updateUserData }: RegisterWizardForm) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number1: "",
    phone_number2: "",
    address: "",
    city: "",
    status: "",
  });
  const { first_name, last_name, phone_number1, phone_number2, address, city, status } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "allowBackorders" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitButton = () => {
    if (
      first_name !== "" &&
      last_name !== "" &&
      phone_number1 !== "" &&
      phone_number2 !== "" &&
      address !== "" &&
      city !== "" &&
      status !== ""
    ) {
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };

  return (
    <div>
      <div>
        <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
          <Image
            className="img-fluid for-light"
            src={dynamicImage(`logo/logo.png`)}
            alt="looginpage"
          />
          <Image
            className="img-fluid for-dark"
            src={dynamicImage(`logo/logo_dark.png`)}
            alt="looginpage"
          ></Image>
        </Link>
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={handleSubmitButton}>
          <Row className="g-3 custom-input">
            <H1>{"Add the Customer"}</H1>
            <P>{"Enter your details below"}</P>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="firstname">
                  {FirstName}
                </Label>
                <Input
                  value={first_name}
                  name="firstName"
                  onChange={updateUserData}
                  id="firstname"
                  type="text"
                  placeholder="Johan"
                />
              </FormGroup>
            </Col>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="lastname">
                  {LastName}
                </Label>
                <Input
                  value={last_name}
                  name="lastName"
                  onChange={updateUserData}
                  id="lastname"
                  type="text"
                  placeholder="Deo"
                />
              </FormGroup>
            </Col>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="phone">
                  {"Phone Number 1"}
                </Label>
                <Input
                  value={phone_number1}
                  name="contactNumber"
                  onChange={updateUserData}
                  id="phone"
                  type="number"
                  placeholder="123456745"
                />
              </FormGroup>
            </Col>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="phone">
                  {"Phone Number 2"}
                </Label>
                <Input
                  value={phone_number2}
                  name="phone_number2"
                  onChange={updateUserData}
                  id="phone"
                  type="number"
                  placeholder="123456745"
                />
              </FormGroup>
            </Col>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="phone">
                  {"Address"}
                </Label>
                <Input
                  value={address}
                  name="address"
                  onChange={updateUserData}
                  id="phone"
                  type="text"
                  placeholder="123456745"
                />
              </FormGroup>
            </Col>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="phone">
                  {"City"}
                </Label>
                <Input
                  value={city}
                  name="city"
                  onChange={updateUserData}
                  id="phone"
                  type="text"
                  placeholder="123456745"
                />
              </FormGroup>
            </Col>
            <Col lg={6} sm={6}>
              <FormGroup>
                <Label className="col-form-label" htmlFor="phone">
                  {"Status"}
                </Label>
                <Input
                  value={status}
                  name="status"
                  onChange={updateUserData}
                  id="phone"
                  type="number"
                  placeholder="123456745"
                />
              </FormGroup>
            </Col>
            <div className="mb-0 form-group">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted" htmlFor="checkbox1">
                  {"Remember"}
                </Label>
              </div>

              <div className="text-end mt-3">
                <Btn color="primary" className="w-100" block>
                  {"Add Customer"}
                </Btn>
              </div>
            </div>
          </Row>
        </Form>
      </div>
    </div>
  );
}
