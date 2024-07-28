import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CustomerFormProps } from "../../../Types/Forms.type";
import {
  AgreeTerms,
  ContactNumber,
  Email,
  FirstName,
  LastName,
  State,
  ZipCode,
} from "../../../Utils/Constants";

export default function YourInfoForm({ formData, updateFormData }: CustomerFormProps) {
  return (
    <Form className="needs-validation custom-input" noValidate>
      <Row className="g-3">
        <Col xxl={4} sm={6}>
          <Label>
            {FirstName}
            <span className="txt-danger">*</span>
          </Label>
          <Input
            placeholder="Enter first name"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={4} sm={6}>
          <Label>
            {LastName}
            <span className="txt-danger">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter last name"
            name="last_name"
            value={formData.last_name}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={4} sm={6}>
          <Label>{"Phone Number 1"}</Label>
          <Input
            name="phone_number1"
            placeholder="Enter your phone number "
            type="text"
            value={formData.phone_number1}
            onChange={updateFormData}
          />
        </Col>

        <Col xxl={4} sm={6}>
          <Label>{"Phone Number 2"}</Label>
          <Input
            name="phone_number2"
            placeholder="Enter your phone number"
            type="text"
            value={formData.phone_number2}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={4} sm={6}>
          <Label>{"Address"}</Label>
          <Input
            placeholder="Enter your address"
            name="address"
            type="text"
            value={formData.address}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={4} sm={6}>
          <Label>{"City"}</Label>
          <Input
            placeholder="your city"
            name="city"
            type="text"
            value={formData.city}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={5} sm={6}>
          <Label>{"Status"}</Label>
          <Input type="select" name="status" value={formData.status} onChange={updateFormData}>
            <option value={"active"}>{"active"}</option>
            <option value={"deactive"}>{"deactive "}</option>
          </Input>
        </Col>

        <Col xs={12}>
          <FormGroup check>
            <Input id="invalidCheck-n" type="checkbox" required />
            <Label htmlFor="invalidCheck-n" check>
              {AgreeTerms}
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}
