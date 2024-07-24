import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { OpenSelectMenu, WorksWithSelects } from '../../../../../Utils/Constants'
import { CommonOpenMenuProps } from '../../../../../Types/Forms.type'

export default function CommonOpenMenu({ inputId, colClass, options }: CommonOpenMenuProps) {

    return (
        <Col className={colClass}>
            <FormGroup floating>
                <Input type="select" id={inputId}>
                    <option value=''>{OpenSelectMenu}</option>
                    {options.map((item, i) => (
                        <option key={i} value={i}>{item}</option>
                    ))}
                </Input>
                <Label for={inputId}>{WorksWithSelects}</Label>
            </FormGroup>
        </Col>
    )
}
