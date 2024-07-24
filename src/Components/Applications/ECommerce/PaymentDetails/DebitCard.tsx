import React from 'react'
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DebitCardTitle } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'
import { selectMonth, selectYear } from '../../../../Data/Applications/ECommerce/Product'

export default function DebitCard() {
    return (
        <Col xl={4} lg={6} className="box-col-6 debit-card">
            <Card>
                <CommonCardHeader headClass='py-4' title={DebitCardTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row className='g-3'>
                            <Col sm={6} className='p-r-0'>
                                <Input type="text" placeholder="Full name here" />
                            </Col>
                            <Col sm={6}>
                                <Input type="number" placeholder="Card number" />
                            </Col>
                            <Col xs={6} className="p-r-0">
                                <Input type="number" placeholder="CVV number" />
                            </Col>
                            <Col xs={6}>
                                <Input type="number" placeholder="CVC" />
                            </Col>
                            <Col xs={12}>
                                <Label className="col-form-label p-b-20">{'Expiration Date'}</Label>
                            </Col>
                            <Col xxl={6} className='p-r-0'>
                                <Input type="select" size={1}>
                                    {selectMonth.map((months, i) => (
                                        <option key={i}>{months}</option>
                                    ))}
                                </Input>
                            </Col>
                            <Col xxl={6}>
                                <Input type="select" size={1}>
                                    {selectYear.map((year, i) => (
                                        <option key={i}>{year}</option>
                                    ))}
                                </Input>
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

