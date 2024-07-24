import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import SvgIcon from '../../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';

export default function PlusIconDropdown() {
    const [dropdown, setDropdown] = useState(false);
    const toggle = () => setDropdown(!dropdown);
    return (
        <Dropdown isOpen={dropdown} toggle={toggle}>
            <DropdownToggle className="dropdown-form" color="transparent"><i className="icon-plus"></i></DropdownToggle>
            <DropdownMenu className="chat-icon" start="true">
                <DropdownItem tag='div' className="mb-2 camera-icon"><SvgIcon iconId='camera' /></DropdownItem>
                <DropdownItem tag='div' className="mb-2 attchment-icon"><SvgIcon iconId='attchment'  /></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}