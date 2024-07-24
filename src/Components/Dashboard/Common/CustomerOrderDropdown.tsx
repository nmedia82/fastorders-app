import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import SvgIcon from '../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { Href } from '../../../Utils/Constants';

export default function CustomerOrderDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <Dropdown isOpen={open} toggle={toggle} className="icon-dropdown">
            <DropdownToggle color='transparent'><SvgIcon iconId='more-horizontal' /></DropdownToggle>
            <DropdownMenu end={true}>
                <DropdownItem href={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`}>{'Add to cart'}</DropdownItem>
                <DropdownItem href={Href}>{'Cancel'}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}