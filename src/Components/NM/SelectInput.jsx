import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export const SelectInput = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  options,
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="select"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options}
      </Input>
    </FormGroup>
  );
};
