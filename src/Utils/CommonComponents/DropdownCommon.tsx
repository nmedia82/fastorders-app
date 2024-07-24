import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Href } from '../Constants';
import { DropdownCommonProp } from '../../Types/CommonComponent.type';

export default function DropdownCommon({item}: DropdownCommonProp) {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup className={item.groupClass}>
            <Dropdown isOpen={open} toggle={toggle} direction={item.position}>
                <DropdownToggle color={item.toggleClass} caret>{item.text}</DropdownToggle>
                <DropdownMenu className={item.bodyClass}>
                    {item.menulist && item.menulist.map((item, index) => (
                        <DropdownItem href={Href} key={index}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
