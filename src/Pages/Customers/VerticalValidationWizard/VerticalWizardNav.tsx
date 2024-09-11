import React from "react";
import { Nav, NavLink } from "reactstrap";
import { CustomerNavProps } from "../../../Types/Forms.type";
import { verticalWizardNav } from "../../../Data/Forms/FormLayout";
import { H6, P } from "../../../AbstractElements";

export default function CustomerNav({
  steps,
  activeCallBack,
}: CustomerNavProps) {
  return (
    <Nav className="flex-column header-vertical-wizard" id="wizard-tab">
      {verticalWizardNav.map((data) => (
        <NavLink
          key={data.id}
          className={steps === data.id ? "active" : ""}
          onClick={() => activeCallBack(data.id)}
        >
          <div className="vertical-wizard">
            <div className="stroke-icon-wizard">
              <i className={`fa fa-${data.icon}`}></i>
            </div>
            <div className="vertical-wizard-content">
              <H6>Customer Details</H6>
            </div>
          </div>
        </NavLink>
      ))}
    </Nav>
  );
}
