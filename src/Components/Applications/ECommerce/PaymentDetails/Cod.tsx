import React from 'react'
import { Card, CardBody, Col, Form, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CodTitle } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'

export default function Cod() {
    return (
        <Col xl={4} lg={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='py-4' title={CodTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row className='g-3'>
                            <Col sm={6} className='p-r-0'>
                                <Input type="text" placeholder="First Name" />
                            </Col>
                            <Col sm={6}>
                                <Input type="text" placeholder="Last Name" />
                            </Col>
                            <Col xs={6} className='p-r-0'>
                                <Input type="number" placeholder="Pincode" />
                            </Col>
                            <Col xs={6}>
                                <Input type="number" placeholder="Enter mobile number" />
                            </Col>
                            <Col xs={6} className='p-r-0'>
                                <Input type="text" placeholder="State" />
                            </Col>
                            <Col xs={6}>
                                <Input type="text" placeholder="City" />
                            </Col>
                            <Col xs={12}>
                                <Input type="textarea" placeholder="Address" />
                            </Col>
                            <Col xs={12}>
                                <Btn color='primary'>{'Submit'}</Btn>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

