import React from 'react'
import { Card, CardBody, Col, Form, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CreditCardTitle } from '../../../../Utils/Constants'
import { cardListType } from '../../../../Data/Applications/ECommerce/Product'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function CreditCard() {
    return (
        <Col xl={8} className="box-col-12">
            <Card>
                <CommonCardHeader headClass='py-4' title={CreditCardTitle} />
                <CardBody>
                    <Row>
                        <Col md={7} className="order-md-0 order-1">
                            <Form className="theme-form mega-form">
                                <Input type="number" placeholder="Card number" />
                                <Input type="text" placeholder="First Name" />
                                <Input type="date" />
                                <Input type="text" placeholder="Name on card" />
                                <Input type='select' size={1}>
                                    {cardListType.map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}
                                </Input>
                            </Form>
                        </Col>
                        <Col md={5} className="text-center">
                            <Image className="img-fluid" src={dynamicImage(`ecommerce/card.png`)} alt="" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col >
    )
}
