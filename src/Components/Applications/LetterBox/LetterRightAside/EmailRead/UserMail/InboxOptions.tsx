import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MailPropsType } from '../../../../../../Types/LetterBox.type';
import SvgIcon from '../../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { Href } from '../../../../../../Utils/Constants';

export default function InboxOptions({ handlePrint }: MailPropsType) {
    const [fill, setFill] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="inbox-options">
            <span>{'Friday 07 Apr (4 hours ago)'}</span>
            <div className="light-square" onClick={() => setFill(!fill)}>
                <SvgIcon className={`important-mail ${fill ? "active" : ""}`} iconId='mail-star' />
            </div>
            <div className="light-square" onClick={handlePrint}>
                <SvgIcon iconId='print' />
            </div>
            <div className="light-square btn-group">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle color="transparent" dir="left"><SvgIcon iconId='menubar' /></DropdownToggle>
                    <DropdownMenu className="dropdown-block">
                        <DropdownItem href={Href}><i className="fa fa-mail-reply"></i>{'Reply'}</DropdownItem>
                        <DropdownItem href={Href}><i className="fa fa-mail-forward"></i>{'Forward'}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}
