import React from 'react'
import { RegisterWizardForm } from '../../../../../Types/Others.type'
import { FormGroup, FormText, Input, Label } from 'reactstrap'
import { ConfirmPassword, EmailAddress, Password } from '../../../../../Utils/Constants'

export default function AddressForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="addrescont">
            <FormGroup>
                <Label className="col-form-label">{EmailAddress}</Label>
                <Input name="email" onChange={updateUserData} value={formValue.email} type="email" placeholder="name@example.com" />
                <FormText className="text-muted" id="emailHelp">{"We'll never share your email with anyone else."}</FormText>
            </FormGroup>
            <FormGroup>
                <Label className="col-form-label">{Password}</Label>
                <Input name="password" onChange={updateUserData} value={formValue.password} type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
                <Label className="col-form-label">{ConfirmPassword}</Label>
                <Input name="confirmPassword" onChange={updateUserData} value={formValue.confirmPassword} type="password" placeholder="Enter confirm password" />
            </FormGroup>
        </div>
    )
}
