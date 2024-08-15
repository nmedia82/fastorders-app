import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TrendingUp } from "react-feather";
import { ActiveProjects } from "../../../../Utils/Constants";
import { H2, H3, H6, LI, ProgressBar, UL } from "../../../../AbstractElements";
import CommonDropdown from "../../CommonDropdown";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { progressDetailsData } from "../../../../Data/Dashboard/Project";
import { ProjectWidgetProp } from "../../../../Types/Dashboard.type";
import { dailyDropdownList } from "../../../../Data/Dashboard/Default";

export default function ProjectWidget({ colClass }: ProjectWidgetProp) {
  return (
    <Col xl={3} sm={6} className={colClass ? colClass : ""}>
      <Card className="project-widget widget-1 title-line">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <div>
              <H3 className="f-w-600">{ActiveProjects}</H3>
              <span className="f-12 f-light f-w-500">{"Projects this month"}</span>
            </div>
            <div className="card-header-right-icon">
              <CommonDropdown
                dropDownClass="icon-dropdown d-xxl-none1"
                dropDownIcon
                end
                dropDownList={dailyDropdownList}
              />
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <H2>{"106"}</H2>
              <span className="f-w-500 txt-warning f-12">
                <TrendingUp className="me-1" />
                <span>{"+50%"}</span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="widget-bottom-content">
          <div className="progress-details">
            <UL className="simple-list flex-row">
              {progressDetailsData.map((item) => (
                <LI className={`bg-${item.color}`} key={item.id}>
                  <SvgIcon iconId={item.icon} />
                </LI>
              ))}
            </UL>
            <H6 className="txt-success f-w-600">{"56%"}</H6>
          </div>
          <ProgressBar color="success" value={56} style={{ height: "5px" }} />
        </CardBody>
      </Card>
    </Col>
  );
}
