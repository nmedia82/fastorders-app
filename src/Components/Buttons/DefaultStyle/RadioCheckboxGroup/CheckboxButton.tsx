import React from 'react'
import { CheckboxButtonTitle } from '../../../../Utils/Constants'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn, H6 } from '../../../../AbstractElements'
import { radioButtonData } from '../../../../Data/Buttons/DefaultStyle'

export default function CheckboxButton() {
    return (
        <Col xl={6}>
            <div className="card-wrapper border rounded-3 bg-light">
                <H6 className="sub-title fw-bold">{CheckboxButtonTitle}</H6>
                <ButtonGroup className="btn-option">
                    {radioButtonData.map((item) => (
                        <Btn color='light-dark' key={item.id}>
                            <div className="checkbox checkbox-dark">
                                <Input id={`checkbox-primary-${item.id}`} type="checkbox" />
                                <Label className="mb-0" htmlFor={`checkbox-primary-${item.id}`}>{item.text}</Label>
                            </div>
                        </Btn>
                    ))}
                </ButtonGroup>
            </div>
        </Col>
    )
}
