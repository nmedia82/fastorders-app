import React from 'react'
import { Col, Row } from 'reactstrap'
import RateColumn from './RateColumn'
import RevenueColumn from './RevenueColumn'
import RevenueSaleCard from '../../../../../Utils/CommonComponents/DashboardCommon/DefaultCommon/RevenueSaleCard'
import { smallChartsData } from '../../../../../Data/Dashboard/Default'

export default function SmallCharts() {
    return (
        <Col xl={6}>
            <Row className="small-charts">
                <RevenueSaleCard data={smallChartsData} />
                <RateColumn/>
                <RevenueColumn/>
            </Row>
        </Col>
    )
}
