import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProjectWidget from "../../../Utils/CommonComponents/DashboardCommon/ProjectCommon/ProjectWidget";
import Widget1Cards from "../../../Pages/Dashboards/MainDashboard/TotalSales";
import RevenueSaleCard from "../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/RevenueSaleCard";
import {
  generalSmallChartsData,
  widgetAverageVisitorsData,
  widgetsTotalProfitOption,
} from "../../../Data/Widgets/General";
import TreadCards from "../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/TreadCards";
import WeeklyVisitors from "../../../Utils/CommonComponents/DashboardCommon/ECommerceCommon/WeeklyVisitors";
import EarningReportsCard from "../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/EarningReportsCard";
import ProjectsOverview from "../../../Utils/CommonComponents/DashboardCommon/ProjectCommon/ProjectsOverview";
import Activities from "../../../Utils/CommonComponents/DashboardCommon/ECommerceCommon/Activities";
import DeliveryCard from "../../../Utils/CommonComponents/DashboardCommon/ECommerceCommon/DeliveryCard";
import TotalProfitCard from "../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/TotalProfitCard";

export default function GeneralWidgets() {
  return (
    <Container fluid className="main-widget">
      <Row>
        <ProjectWidget colClass="col-md-4" />
        <Widget1Cards colClass="col-md-4" cardClass="project-widget-1" />
        <RevenueSaleCard data={generalSmallChartsData} />
        <TreadCards colClass="col-md-9 order-md-ii" />
        <Col xl={4} md={7} sm={8} className="order-xl-vi col-xl-100 order-md-vi">
          <Row>
            <WeeklyVisitors
              cardClass="widget-visitor"
              averageData={widgetAverageVisitorsData}
              bodyClass="visitor-wrapper"
              chartColClass="col-sm-7"
              avgColClass="col-sm-5"
            />
          </Row>
        </Col>
        <EarningReportsCard colClass="order-md-iii" />
        <ProjectsOverview colClass="order-md-vii" height2={180} height={290} />
        <Activities colClass="col-xl-4 col-md-6 order-md-viii" cardClass="widget-acitivity" />
        <DeliveryCard colClass="col-xl-4 col-md-6 order-md-ix" cardClass="delivery-card-1" />
        <TotalProfitCard
          colClass="col-xl-4 order-md-iv"
          options={widgetsTotalProfitOption}
          height={300}
        />
      </Row>
    </Container>
  );
}
