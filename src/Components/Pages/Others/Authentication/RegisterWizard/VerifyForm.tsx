import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { RegisterWizardForm } from '../../../../../Types/Others.type'
import { Birthday, Country, State } from '../../../../../Utils/Constants'

export default function VerifyForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="verifycont">
            <FormGroup>
                <Label className="col-form-label">{Birthday}</Label>
                <Input type="date" onChange={updateUserData} value={formValue.birthDate} name="birthDate" />
            </FormGroup>
            <FormGroup>
                <Label className="col-form-label">{State}</Label>
                <Input value={formValue.state} onChange={updateUserData} name="state" type="text" />
            </FormGroup>
            <FormGroup>
                <Label className="col-form-label">{Country} </Label>
                <Input onChange={updateUserData} type='select' name="country">
                    <option value="">{'Canada'}</option>
                    <option value="">{'United States'}</option>
                    <option value="">{'United Kingdom'}</option>
                    <option value="">{'Germany'}</option>
                    <option value="">{'France'}</option>
                </Input>
            </FormGroup>
        </div>
    )
}
