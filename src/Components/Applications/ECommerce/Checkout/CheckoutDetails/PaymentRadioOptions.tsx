import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function PaymentRadioOptions() {
    return (
        <Row>
            <Col>
                <Label className="d-block" htmlFor="edo-ani">
                    <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                    {'Check Payments'}
                </Label>
                <Label className="d-block" htmlFor="edo-ani1">
                    <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                    {'Cash On Delivery'}
                </Label>
                <Label className="d-block" htmlFor="edo-ani2">
                    <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" />
                    {'PayPal'}
                    <Image className="img-paypal" src={dynamicImage(`other-images/paypal1.png`)} alt="" />
                </Label>
            </Col>
        </Row>
    )
}