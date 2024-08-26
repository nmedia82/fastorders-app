import React from "react";
import { Card, CardHeader, Col } from "reactstrap";
import { H2, H3 } from "../../AbstractElements";

const ReportWidget = ({ Title, Data, currentRange }) => {
  return (
    <Col xl={3} sm={6}>
      <Card className="project-widget widget-1 title-line">
        <CardHeader className="card-no-border pb-100">
          <div className="header-top">
            <div>
              <H3 className="f-w-600">{Title}</H3>
              <span className="f-12 f-light f-w-500">{currentRange}</span>
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <H2>{Data}</H2>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default ReportWidget;
