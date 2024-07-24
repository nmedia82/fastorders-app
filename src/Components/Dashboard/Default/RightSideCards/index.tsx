import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import DiscountReport from './DiscountReport'
import CustomerOrder from './CustomerOrder'
import OfferBanner from './OfferBanner'
import TodoWrapper from './TodoWrapper'

export default function RightSideCards() {
    return (
        <Col xl={3} className="col-xl-100">
            <Card>
                <Row>
                    <DiscountReport/>
                    <CustomerOrder/>
                    <OfferBanner/>
                    <TodoWrapper/>
                </Row>
            </Card>
        </Col>
    )
}
