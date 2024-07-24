import React from 'react'
import { Col, Input, Label } from 'reactstrap'
import { Country } from '../../../../../Utils/Constants'
import { countryMenu } from '../../../../../Data/Applications/ECommerce/Product'

export default function CheckoutSelect() {
    return (
        <Col xs={12}>
            <Label>{Country}</Label>
            <Input type="select">
                {countryMenu.map((items, i) => (
                    <option key={i}>{items}</option>
                ))}
            </Input>
        </Col>
    )
}
