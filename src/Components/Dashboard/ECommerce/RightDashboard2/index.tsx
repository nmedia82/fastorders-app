import React from 'react'
import { Col, Row } from 'reactstrap'
import DealCard from './DealCard'
import EarningChart from './EarningChart'
import Activities from '../../../../Utils/CommonComponents/DashboardCommon/ECommerceCommon/Activities'
import DeliveryCard from '../../../../Utils/CommonComponents/DashboardCommon/ECommerceCommon/DeliveryCard'

export default function RightDashboard2() {
    return (
        <Col xl={3} className="col-xl-40">
            <Row>
                <DealCard />
                <EarningChart />
                <Activities colClass='col-xl-12 col-md-6' cardClass='height-equal' />
                <DeliveryCard colClass='col-xl-12 col-md-6' cardClass='height-equal delivery-card' />
            </Row>
        </Col>
    )
}
