import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PointFormatedLabelTitle } from '../../../../Utils/Constants'
import PointFormatedDemo from './PointFormatedDemo'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'

export default function PointFormatedLabel() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={PointFormatedLabelTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                        <FormGroup>
                            <Row>
                                <Col md={10}>
                                    <PointFormatedDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
