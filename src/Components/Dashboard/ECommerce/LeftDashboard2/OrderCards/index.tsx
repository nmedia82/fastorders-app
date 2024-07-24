import React from 'react'
import { Col, Row } from 'reactstrap'
import Widget1Card from './Widget1Card'
import CustomerCard from './CustomerCard'

export default function OrderCards() {
    return (
        <Col xl={3} md={4} sm={6} className="order-xl-v col-xl-50 order-sm-i">
            <Row>
                <Widget1Card />
                <CustomerCard/>
            </Row>
        </Col>
    )
}
