import React from "react";
import { RegisterWizardForm } from "../../../../../Types/Others.type";
import { FormGroup, FormText, Input, Label } from "reactstrap";
import {
  ConfirmPassword,
  EmailAddress,
  Password,
} from "../../../../../Utils/Constants";

export default function AddressForm({
  formValue,
  updateUserData,
}: RegisterWizardForm) {
  return (
    <div id="addrescont">
      <FormGroup>
        <Label className="col-form-label" htmlFor="contactNumber">
          WhatsApp Number
        </Label>
        <Input
          value={formValue.contactNumber}
          name="contactNumber"
          onChange={updateUserData}
          id="contactNumber"
          type="number"
          placeholder="123456745"
        />
        <FormText className="text-muted" id="emailHelp">
          Password will be sent via WhatsApp
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{"Business Name"}</Label>
        <Input
          name="businessName"
          onChange={updateUserData}
          value={formValue.businessName}
          type="text"
          placeholder=""
        />
        <FormText className="text-muted" id="emailHelp">
          {"e.g: Java Grill & BBQ."}
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{"Business Address"}</Label>
        <Input
          name="businessAddress"
          onChange={updateUserData}
          value={formValue.businessAddress}
          type="text"
          placeholder=""
        />
        <FormText className="text-muted" id="emailHelp">
          {"Business Location"}
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{"City "}</Label>
        <Input
          name="city"
          onChange={updateUserData}
          value={formValue.city}
          type="text"
          placeholder=""
        />
      </FormGroup>
    </div>
  );
}
