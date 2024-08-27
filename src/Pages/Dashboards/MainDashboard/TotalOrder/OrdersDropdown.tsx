import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { Href } from "../../../../Utils/Constants";
import { CommonHeaderWithDropdownProps } from "../../../../Types/CommonComponent.type";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDashboardReports } from "../../../../ReduxToolkit/Reducers/AppReducer";
import { AppDispatch } from "../../../../ReduxToolkit/Store";

export default function TotalOrderDropDown({
  start,
  end,
  dropDownTitle,
  caret,
  dropDownClass,
  dropDownIcon,
  onReportRangeChange,
}: CommonHeaderWithDropdownProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const { allRanges, currentRange } = useSelector((state: any) => state.app);

  return (
    <Dropdown
      isOpen={open}
      toggle={toggle}
      className={dropDownClass ? dropDownClass : ""}
    >
      <DropdownToggle color="transparent" caret={caret ? true : false}>
        {dropDownIcon ? <SvgIcon iconId="more-horizontal" /> : dropDownTitle}
      </DropdownToggle>
      <DropdownMenu start={start ? "true" : "false"} end={end ? true : false}>
        {allRanges
          .filter(
            (range: { key: string; label: string }) =>
              range.label !== currentRange
          )
          .map((range: { key: string; label: string }, index: number) => (
            <DropdownItem
              key={range.key}
              href={Href}
              onClick={() => onReportRangeChange(range.key)}
            >
              {range.label}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}
