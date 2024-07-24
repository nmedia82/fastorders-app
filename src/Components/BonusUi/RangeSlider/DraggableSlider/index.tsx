import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import DraggableDemo from './DraggableDemo'
import { DraggableTitle } from '../../../../Utils/Constants'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'

export default function DraggableSlider() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={DraggableTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                        <FormGroup>
                            <Row>
                                <Col md={10}>
                                    <DraggableDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
