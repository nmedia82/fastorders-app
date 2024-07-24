import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultRangeTitle } from '../../../../Utils/Constants'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import DefaultRangeDemo from './DefaultRangeDemo'

export default function DefaultRange() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={DefaultRangeTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                        <FormGroup>
                            <Row>
                                <Col md={10}>
                                    <DefaultRangeDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
