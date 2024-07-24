import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { FixPrice, High, Hourly, Low, Medium, Priority, ProjectType, Urgent } from '../../../../../Utils/Constants'

export default function DropItems() {
    return (
        <>
            <Col sm={4}>
                <FormGroup>
                    <Label>{ProjectType}</Label>
                    <Input type="select">
                        <option value="Hourly">{Hourly}</option>
                        <option value="Fix Price">{FixPrice} </option>
                    </Input>
                </FormGroup>
            </Col>
            <Col sm={4}>
                <FormGroup>
                    <Label>{Priority}</Label>
                    <Input type="select">
                        <option>{Low}</option>
                        <option>{Medium}</option>
                        <option>{High}</option>
                        <option>{Urgent}</option>
                    </Input>
                </FormGroup>
            </Col>
        </>
    )
}
