import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicDropdownTitle } from '../../../../Utils/Constants'
import { basicDropdownData, basicDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import BasicDemo from './BasicDemo'
import DropdownCommon from '../Common/DropdownCommon'

export default function BasicDropdown() {
    return (
        <Col xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={BasicDropdownTitle} subTitle={basicDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <BasicDemo />
                        {basicDropdownData && basicDropdownData.map((item, index) => (
                            <Fragment key={index}>
                                <DropdownCommon item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
