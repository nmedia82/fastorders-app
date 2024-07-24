import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { UniqueDropdownTitle } from '../../../../Utils/Constants'
import { uniqueDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import DropdownForm from './DropdownForm'
import DropdownText from './DropdownText'

export default function UniqueDropdown() {
    return (
        <Col sm={6}>
            <Card className='title-line'>
                <CommonCardHeader title={UniqueDropdownTitle} subTitle={uniqueDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <DropdownForm />
                        <DropdownText />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}