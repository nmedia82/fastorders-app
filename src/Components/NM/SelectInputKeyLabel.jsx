import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export const SelectInputKeyLabel = ({
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
        {options.map((option) => (
          <option value={option.key}>{option.label}</option>
        ))}
      </Input>
    </FormGroup>
  );
};
