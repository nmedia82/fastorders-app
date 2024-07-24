import React, { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { HeadingDropdownTitle, Href, Party } from '../../../../Utils/Constants';
import { headingDropdownSubTitle } from '../../../../Data/UiKits/Dropdown';

export default function HeadingDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }

    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={HeadingDropdownTitle} subTitle={headingDropdownSubTitle} />
                <CardBody className='rtl-dropdown heading-dropdown'>
                    <div className='common-flex'>
                        <ButtonGroup>
                            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                                <DropdownToggle caret color='success' className='rounded-pill text-white'>{Party}</DropdownToggle>
                                <DropdownMenu className="dropdown-block">
                                    <DropdownItem href={Href} header className='fw-bold fs-6'>{'Party List'}</DropdownItem>
                                    <DropdownItem href={Href}>{'Balloons'}</DropdownItem>
                                    <DropdownItem href={Href}>{'Cake'}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </ButtonGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

