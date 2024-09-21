import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export const TextInput = ({ name, value, label, placeholder, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};
export const DateInput = ({ name, value, label, placeholder, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="date"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};
