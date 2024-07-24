import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RoundedDemo from './RoundedDemo'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RoundedDropdownTitle } from '../../../../Utils/Constants'
import { roundedDropdownData, roundedDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import DropdownCommon from '../Common/DropdownCommon'

export default function RoundedDropdown() {
    return (
        <Col xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={RoundedDropdownTitle} subTitle={roundedDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <RoundedDemo />
                        {roundedDropdownData && roundedDropdownData.map((item, index) => (
                            <Fragment key={index}>
                                <DropdownCommon item={item} toggleClass='rounded-pill' />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
