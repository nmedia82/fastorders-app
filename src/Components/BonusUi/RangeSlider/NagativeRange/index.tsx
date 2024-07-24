import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NagativeRangeTitle } from '../../../../Utils/Constants'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import NagativeRangeDemo from './NagativeRangeDemo'

export default function NagativeRange() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={NagativeRangeTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                        <FormGroup>
                            <Row>
                                <Col md={10}>
                                    <NagativeRangeDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
