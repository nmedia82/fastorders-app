import React from "react";
import { FormGroup, FormText, Input, Label } from "reactstrap";
import { RegisterWizardForm } from "../../../../../Types/Others.type";
import { Birthday, Country, State } from "../../../../../Utils/Constants";
import Header from "../../../../../Layout/Header";
import { H1, H5 } from "../../../../../AbstractElements";

export default function FinalRegisterForm() {
  return (
    <div id="verifycont">
      <H1 className="mb-4">Congratulations!!</H1>
      <H5 className="text-muted">
        Please check your WhatsApp for Login details.
      </H5>
    </div>
  );
}
