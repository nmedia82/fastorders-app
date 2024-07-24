import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Text } from '../../../../Utils/Constants';
import { P } from '../../../../AbstractElements';

export default function DropdownText() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret color='dark' className='text-white'>{Text}</DropdownToggle>
                <DropdownMenu className='p-4 form-wrapper'>
                    <P>{"Some example text that's free-flowing within the dropdown menu."}</P>
                    <P className="mb-0">{'And this is more example text.'}</P>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
