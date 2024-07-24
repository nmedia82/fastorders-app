import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Href, SmallButton } from '../../../../Utils/Constants';

export default function SmallDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret color='dark' className='light text-white' size="sm">{SmallButton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{'Small button'}</DropdownItem>
                    <DropdownItem href={Href}>{'Very small button'}</DropdownItem>
                    <DropdownItem href={Href}>{'Extra small button'}</DropdownItem>
                    <DropdownItem href={Href} divider></DropdownItem>
                    <DropdownItem href={Href}>{'Extra extra small'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}

