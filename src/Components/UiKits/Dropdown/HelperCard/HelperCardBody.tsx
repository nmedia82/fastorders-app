import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Href } from '../../../../Utils/Constants';
import { DropdownCommonProp } from '../../../../Types/UiKits.type';

export default function HelperCardBody({item}: DropdownCommonProp ) {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color={item.class} >{item.text}</DropdownToggle>
                <DropdownMenu className="dropdown-block p-3 dark-form">
                    <DropdownItem header className='fs-6 fw-bold pb-2 ps-0 text-dark border-bottom-1' href={Href}>{item.menulist[0]}</DropdownItem>
                    <DropdownItem className='p-0 helper-truncate' href={Href}>{item.menulist[1]}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
