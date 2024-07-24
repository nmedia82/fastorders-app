import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { DatalistExampleTitle } from '../../../../../../Utils/Constants'

export default function DatalistExample() {
    return (
        <Row className="mb-3">
            <Col sm={3}> <Label htmlFor="exampleDataList">{DatalistExampleTitle}</Label></Col>
            <Col sm={9}>
                <Input id="exampleDataList" list="datalistOptions" placeholder="Look up your nation..." />
                <datalist id="datalistOptions">
                    <option value="San Francisco"></option>
                    <option value="New York"></option>
                    <option value="Seattle"></option>
                    <option value="Los Angeles"></option>
                    <option value="Chicago"></option>
                    <option value="India"></option>
                </datalist>
            </Col>
        </Row>
    )
}
