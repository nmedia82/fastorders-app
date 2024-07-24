import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Href, WarningTop } from '../../../../Utils/Constants';

export default function AlignTopDemo() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup className='dropup'>
            <Dropdown isOpen={open} toggle={toggle} direction='up'>
                <DropdownToggle caret color='warning' className='text-white' >{WarningTop}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{'Be careful'}</DropdownItem>
                    <DropdownItem href={Href}>{'Notifications'}</DropdownItem>
                    <DropdownItem href={Href}>{'Beware'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}

