import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export const NumberInput = ({ name, value, label, placeholder, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="number"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};

export const EmailInput = ({ name, value, label, placeholder, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="email"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};
export const UrlInput = ({ name, value, label, placeholder, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="url"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};
