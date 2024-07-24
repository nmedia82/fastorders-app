import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H2 } from '../../../../../AbstractElements'
import DealSlider from './DealSlider';
import DealTimer from './DealTimer';

export default function DealCard() {
    return (
        <Col xl={12} sm={6}>
            <Card className="title-line deal-card">
                <CardBody className="left-line deal-animation">
                    <Row className="align-items-center">
                        <Col xs={12}>
                            <Row className="g-4">
                                <Col xl={8} md={12}>
                                    <H2>{'Deal of the day'}</H2>
                                    <span className="f-light f-12 f-w-500">{'Special Discount '}<span className="txt-primary f-12 f-w-500 discount-offer">{'60% OFF'}</span></span>
                                    <DealTimer />
                                </Col>
                                <DealSlider />
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
