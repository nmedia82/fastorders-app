import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DisabledSliderTitle } from '../../../../Utils/Constants'
import { disabledSliderSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import DisabledSliderDemo from './DisabledSliderDemo'

export default function DisabledSlider() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={DisabledSliderTitle} subTitle={disabledSliderSubTitle} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                        <FormGroup>
                            <Row>
                                <Col md={10}>
                                    <DisabledSliderDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}