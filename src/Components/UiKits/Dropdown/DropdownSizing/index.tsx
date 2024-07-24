import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DropdownSizingTitle } from '../../../../Utils/Constants'
import { dropdownSizingSubTitle } from '../../../../Data/UiKits/Dropdown'
import LargeDropdown from './LargeDropdown'
import SmallDropdown from './SmallDropdown'

export default function DropdownSizing() {
    return (
        <Col md={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={DropdownSizingTitle} subTitle={dropdownSizingSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <LargeDropdown />
                        <SmallDropdown />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
