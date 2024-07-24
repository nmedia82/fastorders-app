import React from 'react'
import { Col, Row } from 'reactstrap'

export default function HorizontalCenter() {
    return (
        <Row className="justify-content-center bg-light">
            <Col xs={5}>
                <span className="bg-white text-dark">{'One column'}</span>
            </Col>
            <Col xs={5}>
                <span className="bg-white text-dark">{'Two column'}</span>
            </Col>
        </Row>
    )
}
