import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { RegisterWizardForm } from "../../../../../Types/Others.type";

export default function PersonalForm({
  formValue,
  updateUserData,
}: RegisterWizardForm) {
  return (
    <div id="aboutcont">
      <FormGroup>
        <Label className="col-form-label" htmlFor="fullName">
          {"Full Name"}
        </Label>
        <Input
          value={formValue.fullName}
          name="fullName"
          onChange={updateUserData}
          id="fullName"
          type="text"
          placeholder="Johan"
        />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label" htmlFor="email">
          Email
        </Label>
        <Input
          value={formValue.email}
          name="email"
          onChange={updateUserData}
          id="lastname"
          type="email"
          placeholder="mybiz@gmail.com"
        />
      </FormGroup>
    </div>
  );
}
