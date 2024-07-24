import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { CommonSelectDropdownProps } from '../../../../../Types/Forms.type'

export default function CommonSelectDropdown({inputClass, options, title, multiple,optionClass}:CommonSelectDropdownProps) {
    return (
        <Col>
            <FormGroup>
                <Label>{title}</Label>
                <Input type="select" className={inputClass} multiple={multiple}>
                    {options.map((item, i) => (
                        <option className={optionClass ? optionClass : ''} key={i}>{item}</option>
                    ))}
                </Input>
            </FormGroup>
        </Col>
    )
}
