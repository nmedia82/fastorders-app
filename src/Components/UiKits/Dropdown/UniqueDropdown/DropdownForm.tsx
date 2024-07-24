import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label } from 'reactstrap';
import { DropdownFormText, EmailAddress, Password, RememberMe, SignIn } from '../../../../Utils/Constants';
import { Btn } from '../../../../AbstractElements';

export default function DropdownForm() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret color='secondary' className='text-white'>{DropdownFormText}</DropdownToggle>
                <DropdownMenu>
                    <Form className="p-4 form-wrapper dark-form">
                        <FormGroup>
                            <Label htmlFor="exampleDropdownFormEmail2">{EmailAddress}</Label>
                            <Input id="exampleDropdownFormEmail2" type="email" placeholder="email@example.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="exampleDropdownFormPassword2">{Password}</Label>
                            <Input id="exampleDropdownFormPassword2" type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup check>
                            <Input id="dropdownCheck2" type="checkbox" />
                            <Label htmlFor="dropdownCheck2" check>{RememberMe}</Label>
                        </FormGroup>
                        <Btn color='dark' onClick={toggle}>{SignIn}</Btn>
                    </Form>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}

