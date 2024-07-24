import React from 'react'
import { Col, Row } from 'reactstrap'
import CustomerRate from './CustomerRate'
import WeeklyVisitors from '../../../../../Utils/CommonComponents/DashboardCommon/ECommerceCommon/WeeklyVisitors'
import { averageVisitorsData } from '../../../../../Data/Dashboard/ECommerce'

export default function VisitorCustomer() {
    return (
        <Col xl={5} md={6} xs={12} className="order-xl-vi col-xl-100">
            <Row>
                <WeeklyVisitors colClass='col-xl-50' averageData={averageVisitorsData} chartColClass='col-xl-100 col-md-7 col-sm-8' avgColClass='col-md-5 col-sm-4' />
                <CustomerRate />
            </Row>
        </Col>
    )
}
