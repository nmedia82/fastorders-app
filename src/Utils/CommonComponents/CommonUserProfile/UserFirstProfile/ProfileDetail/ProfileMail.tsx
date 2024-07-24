import React from 'react'
import { Col, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { BOD, Email } from '../../../../Constants'

export default function ProfileMail() {
    return (
        <Col sm={6} xl={4} className="order-sm-1 order-xl-0">
            <Row className="g-3">
                <Col md={6}>
                    <div className="text-start tour-email">
                        <H6 className="tour-mb-space">
                            <i className="fa fa-envelope" />  {Email}
                        </H6>
                        <span>{'William@jourrapide.com'}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-start ttl-sm-mb-0 tour-email">
                        <H6 className="tour-mb-space">
                            <i className="fa fa-calendar" />  {BOD}
                        </H6>
                        <span>{'02 January 2024'}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

