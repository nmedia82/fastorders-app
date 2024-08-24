import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TrendingUp } from "react-feather";
import { H2, H3, H6, LI, ProgressBar, UL } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { progressDetailsData } from "../../../../Data/Dashboard/Project";
import { ProjectWidgetProp } from "../../../../Types/Dashboard.type";
import { dailyDropdownList } from "../../../../Data/Dashboard/Default";

export default function Discounts({ colClass }: ProjectWidgetProp) {
  return (
    <Col xl={3} sm={6} className={colClass ? colClass : ""}>
      <Card className="project-widget widget-1 title-line" style={{ paddingBottom: "60px" }}>
        <CardHeader className="card-no-border pb-100">
          <div className="header-top">
            <div>
              <H3 className="f-w-600">{"Discount"}</H3>
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <H2>123</H2>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
}
