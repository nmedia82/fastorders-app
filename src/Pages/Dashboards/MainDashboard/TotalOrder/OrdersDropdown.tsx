import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { Href } from "../../../../Utils/Constants";
import { CommonHeaderWithDropdownProps } from "../../../../Types/CommonComponent.type";

export default function TotalOrderDropDown({
  start,
  end,
  dropDownTitle,
  caret,
  dropDownClass,
  dropDownIcon,
}: CommonHeaderWithDropdownProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  // Your custom dropdown items
  const dropDownList = ["Last 30 days", "Last 60 days", "Last 90 days"];

  return (
    <Dropdown isOpen={open} toggle={toggle} className={dropDownClass ? dropDownClass : ""}>
      <DropdownToggle color="transparent" caret={caret ? true : false}>
        {dropDownIcon ? <SvgIcon iconId="more-horizontal" /> : dropDownTitle}
      </DropdownToggle>
      <DropdownMenu start={start ? "true" : "false"} end={end ? true : false}>
        {dropDownList.map((item, index) => (
          <DropdownItem key={index} href={Href}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
