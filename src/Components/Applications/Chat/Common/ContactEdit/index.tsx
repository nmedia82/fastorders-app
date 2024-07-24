import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { ContactEditProp } from '../../../../../Types/Chat.type';
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { Href } from '../../../../../Utils/Constants';

export default function ContactEdit({ divClass }: ContactEditProp) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className={`contact-edit ${divClass ? divClass : ''}`}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="transparent d-flex align-items-center">
                    <SvgIcon iconId='menubar' />
                </DropdownToggle>
                <DropdownMenu end={true}>
                    <DropdownItem href={Href}>{'View details'}</DropdownItem>
                    <DropdownItem href={Href}>{'Send messages'}</DropdownItem>
                    <DropdownItem href={Href}>{'Add to favorites'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

