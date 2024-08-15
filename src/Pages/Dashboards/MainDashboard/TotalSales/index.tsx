import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TrendingUp } from "react-feather";
import { H2, H3, H6, LI, ProgressBar, UL } from "../../../../AbstractElements";
import TotalSalesDropDown from "./SalesDropdown";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { progressDetailsData } from "../../../../Data/Dashboard/Project";
import { ProjectWidgetProp } from "../../../../Types/Dashboard.type";
import { dailyDropdownList } from "../../../../Data/Dashboard/Default";

export default function TotalOrders({ colClass }: ProjectWidgetProp) {
  return (
    <Col xl={3} sm={6} className={colClass ? colClass : ""}>
      <Card className="project-widget widget-1 title-line" style={{ paddingBottom: "40px" }}>
        <CardHeader className="card-no-border pb-100">
          <div className="header-top">
            <div>
              <H3 className="f-w-600">{"Total Sales"}</H3>
              <span className="f-12 f-light f-w-500">Last 24 Hours</span>
            </div>
            <div className="card-header-right-icon">
              <TotalSalesDropDown
                dropDownClass="icon-dropdown d-xxl-none1"
                dropDownIcon
                end
                dropDownList={dailyDropdownList}
                caret={true}
              />
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <H2>$4233</H2>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
}
