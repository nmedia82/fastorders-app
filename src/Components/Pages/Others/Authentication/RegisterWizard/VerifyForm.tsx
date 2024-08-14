import React from "react";
import { FormGroup, FormText, Input, Label } from "reactstrap";
import { RegisterWizardForm } from "../../../../../Types/Others.type";
import { Birthday, Country, State } from "../../../../../Utils/Constants";

export default function VerifyForm({
  formValue,
  updateUserData,
}: RegisterWizardForm) {
  return (
    <div id="verifycont">
      <FormGroup>
        <Label className="col-form-label">App Domain Name</Label>
        <Input
          name="appDomain"
          onChange={updateUserData}
          value={formValue.appDomain}
          type="text"
          placeholder=""
        />
        <FormText className="text-muted" id="emailHelp">
          {"e.g: java.getorder.pk"}
        </FormText>
      </FormGroup>
    </div>
  );
}
