import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import SvgIcon from './CommonIcons/CommonSvgIcons';
import { Href } from '../Constants';
import { CommonHeaderWithDropdownProps } from '../../Types/CommonComponent.type';

export default function CommonDropdown({ dropDownList, start, end, dropDownTitle, caret, dropDownClass, dropDownIcon, }: CommonHeaderWithDropdownProps) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <Dropdown isOpen={open} toggle={toggle} className={dropDownClass ? dropDownClass : ''}>
            <DropdownToggle color='transparent' caret={caret ? true : false}>
                {dropDownIcon ? <SvgIcon iconId='more-horizontal' /> : dropDownTitle}
            </DropdownToggle>
            <DropdownMenu start={start ? 'true' : 'false'} end={end ? true : false}>
                {dropDownList.map((item, index) => (
                    <DropdownItem key={index} href={Href}>{item}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
