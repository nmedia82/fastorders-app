import React from 'react'
import { Col, Input } from 'reactstrap'

export default function CareerSelect() {
    return (
        <Col xs={12}>
            <Input type="select">
                <option value="">{'In which career are you interested?'}</option>
                <option value="1">{'Software Developer'}</option>
                <option value="2">{'Data Scientist'}</option>
                <option value="3">{'Biomedical Engineer'}</option>
            </Input>
        </Col>
    )
}
