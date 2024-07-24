import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { FilledRadioTitle } from '../../../../../Utils/Constants'
import { filledRadioData } from '../../../../../Data/Forms/FormControls'

export default function FilledRadio() {
    return (
        <Col xl={4} sm={6}>
            <div className="card-wrapper border rounded-3 fill-radios h-100 checkbox-checked">
                <H6 className="sub-title">{FilledRadioTitle} </H6>
                {filledRadioData.map((data) => (
                    <FormGroup key={data.id} className={`radio radio-${data.color}`} check>
                        <Input id={`radio${data.id}`} type="radio" name="radio3" value="option3" defaultChecked={data.check === 'checked'} />
                        <Label htmlFor={`radio${data.id}`} check> {data.text}</Label>
                    </FormGroup>
                ))}
            </div>
        </Col>
    )
}
