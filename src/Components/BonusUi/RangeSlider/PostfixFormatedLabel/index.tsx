import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import PostfixFormatedDemo from './PostfixFormatedDemo'
import { PostfixFormatedLabelTitle } from '../../../../Utils/Constants'

export default function PostfixFormatedLabel() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={PostfixFormatedLabelTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                        <FormGroup>
                            <Row>
                                <Col md={10}>
                                    <PostfixFormatedDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
