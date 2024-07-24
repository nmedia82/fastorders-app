import React from 'react'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn, H6 } from '../../../../AbstractElements'
import { radioButtonData } from '../../../../Data/Buttons/DefaultStyle'
import { RadioButtonTitle } from '../../../../Utils/Constants'

export default function RadioButton() {
    return (
        <Col xl={6}>
            <div className="card-wrapper border rounded-3 bg-light">
                <H6 className="sub-title fw-bold">{RadioButtonTitle}</H6>
                <div className="btn-radio">
                    <ButtonGroup>
                        {radioButtonData.map((item) => (
                            <Btn color='light-primary' key={item.id}>
                                <div className="radio radio-primary">
                                    <Input id={`radio${item.id}`} type="radio" name="radio1" value="option1" defaultChecked={item.id === 8 ? true : false} />
                                    <Label className="mb-0" htmlFor={`radio${item.id}`}>{item.text}</Label>
                                </div>
                            </Btn>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}
