import React from 'react'
import { Card, CardBody, Col, Form, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NetBankingTitle } from '../../../../Utils/Constants'
import { bankName } from '../../../../Data/Applications/ECommerce/Product'
import { Btn } from '../../../../AbstractElements'

export default function NetBanking() {
    return (
        <Col xl={4} lg={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='py-4' title={NetBankingTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row className='g-3'>
                            <Col xs={12}>
                                <Input type="text" placeholder="AC Holder name" />
                            </Col>
                            <Col xs={12}>
                                <Input type="text" placeholder="Account number" />
                            </Col>
                            <Col xxl={6} className='p-r-0'>
                                <Input type="select" size={1} >
                                    {bankName.map((item, i) => (
                                        <option key={i}>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                            <Col xxl={6}>
                                <Input type="text" placeholder="ICFC code" />
                            </Col>
                            <Col xs={12}>
                                <Input type="number" placeholder="Enter mobile number" />
                            </Col>
                            <Col xs={12}>
                                <Input type="text" placeholder="Other Details" />
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
