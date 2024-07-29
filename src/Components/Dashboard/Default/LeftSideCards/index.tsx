import React from "react";
import { Col, Row } from "reactstrap";
import UpgradeCard from "./UpgradeCard";
import SmallCharts from "./SmallCharts";
import TransactionHeader from "./TransactionHeader";
import MemberWrapper from "./MemberWrapper";
import ReportOptionCard from "./ReportOptionCard";
import TreadCards from "../../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/TreadCards";
import TotalProfitCard from "../../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/TotalProfitCard";
import { totalProfitOption } from "../../../../Data/Dashboard/Default";
import EarningReportsCard from "../../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/EarningReportsCard";

export default function LeftSideCards() {
  return (
    <Col xl={9} className="col-xl-100 box-col-12">
      <Row>
        <UpgradeCard />
        <TreadCards />
        <SmallCharts />
        <TotalProfitCard
          colClass="col-xl-6"
          cardClass="height-equal"
          options={totalProfitOption}
          height={255}
        />
        <EarningReportsCard />
        <TransactionHeader />
        <MemberWrapper />
        <ReportOptionCard />
      </Row>
    </Col>
  );
}
