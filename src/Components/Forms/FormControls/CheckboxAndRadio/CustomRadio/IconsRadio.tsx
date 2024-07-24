import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { IconsRadioTitle } from '../../../../../Utils/Constants'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { iconRadioData } from '../../../../../Data/Forms/FormControls'

export default function IconsRadio() {
    return (
        <Col xl={4} sm={12} className="order-xl-0 order-sm-1">
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <H6 className="sub-title">{IconsRadioTitle}</H6>
                <FormGroup className="radio radio-primary ps-0" check>
                    <UL className='simple-list flex-row radio-wrapper'>
                        {iconRadioData.map((data) => (
                            <LI key={data.id}>
                                <Input id={`radio${data.id}`} type="radio" name="radio2" value="option2" defaultChecked={data.check === 'checked'} />
                                <Label htmlFor={`radio${data.id}`} check><i className={`fa fa-${data.icon}`}></i><span>{data.text}</span></Label>
                            </LI>
                        ))}
                    </UL>
                </FormGroup>
            </div>
        </Col>
    )
}
