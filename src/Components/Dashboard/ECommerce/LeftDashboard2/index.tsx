import React from 'react'
import { Col, Row } from 'reactstrap'
import SalesDetails from './SalesDetails'
import StoreCard from './StoreCard'
import RevenueHeader from './RevenueHeader'
import OrderCards from './OrderCards'
import RecentOrder from './RecentOrder'
import StockReport from './StockReport'
import VisitorCustomer from './VisitorCustomer'

export default function LeftDashboard2() {
    return (
        <Col xl={9} className="col-xl-80">
            <Row>
                <SalesDetails/>
                <StoreCard/>
                <RevenueHeader/>
                <OrderCards/>
                <RecentOrder/>
                <StockReport/>
                <VisitorCustomer/>
            </Row>
        </Col>
    )
}
