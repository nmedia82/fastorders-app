import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { FirstName, LastName, Phone } from '../../../../../Utils/Constants'
import { RegisterWizardForm } from '../../../../../Types/Others.type'

export default function PersonalForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="aboutcont">
            <FormGroup>
                <Label className="col-form-label" htmlFor="firstname">{FirstName}</Label>
                <Input value={formValue.firstName} name="firstName" onChange={updateUserData} id="firstname" type="text" placeholder="Johan"/>
            </FormGroup>
            <FormGroup>
                <Label className="col-form-label" htmlFor="lastname">{LastName}</Label>
                <Input value={formValue.lastName} name="lastName" onChange={updateUserData} id="lastname" type="text" placeholder="Deo"/>
            </FormGroup>
            <FormGroup>
                <Label className="col-form-label" htmlFor="phone">{Phone}</Label>
                <Input value={formValue.contactNumber} name="contactNumber" onChange={updateUserData} id="phone" type="number" placeholder="123456745"/>
            </FormGroup>
        </div>
    )
}
