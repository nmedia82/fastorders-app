import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CustomerFormProps } from "../../../Types/Forms.type";
import {
  AgreeTerms,
  ContactNumber,
  Email,
  FullName,
  City,
  Address,
} from "../../../Utils/Constants";

export default function YourInfoForm({
  formData,
  updateFormData,
}: CustomerFormProps) {
  return (
    <Form className="needs-validation custom-input">
      <Row className="g-3">
        <Col xxl={6} sm={6}>
          <Label>
            {FullName}
            <span className="txt-danger">*</span>
          </Label>
          <Input
            placeholder="Enter full name"
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={6} sm={6}>
          <Label>
            {Email}
            <span className="txt-danger">*</span>
          </Label>
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={6} sm={6}>
          <Label>{ContactNumber}</Label>
          <Input
            name="phone_number"
            placeholder="Enter phone number"
            type="text"
            value={formData.phone_number}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={6} sm={6}>
          <Label>{Address}</Label>
          <Input
            placeholder="Enter your address"
            name="address"
            type="text"
            value={formData.address}
            onChange={updateFormData}
          />
        </Col>
        <Col xxl={6} sm={6}>
          <Label>{City}</Label>
          <Input
            placeholder="Enter your city"
            name="city"
            type="text"
            value={formData.city}
            onChange={updateFormData}
          />
        </Col>
      </Row>
    </Form>
  );
}
