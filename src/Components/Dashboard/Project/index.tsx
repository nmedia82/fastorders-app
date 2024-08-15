import React from "react";
import { Container, Row } from "reactstrap";
import WelcomeCard from "./WelcomeCard";
import CalendarCard from "./CalendarCard";
import ProjectsStatus from "./ProjectsStatus";
import ChatApplication from "./ChatApplication";
import RecentProjectUpdate from "./RecentProjectUpdate";
import EarningTread from "./EarningTread";
import DailyTask from "./DailyTask";
import ProjectWidget from "../../../Utils/CommonComponents/DashboardCommon/ProjectCommon/ProjectWidget";
import Widget1Cards from "../../../Pages/Dashboards/MainDashboard/TotalSales";
import ProjectsOverview from "../../../Utils/CommonComponents/DashboardCommon/ProjectCommon/ProjectsOverview";

export default function ProjectDashboard() {
  return (
    <Container fluid>
      <Row>
        <WelcomeCard />
        <ProjectWidget />
        <Widget1Cards />
        <ProjectsOverview
          colClass="col-xxl-7 col-lg-6 col-md-6"
          cardClass="height-equal"
          height2={180}
          height={240}
        />
        <CalendarCard />
        <ProjectsStatus />
        <ChatApplication />
        <RecentProjectUpdate />
        <EarningTread />
        <DailyTask />
      </Row>
    </Container>
  );
}
