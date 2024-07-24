import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DividerDropdownTitle } from '../../../../Utils/Constants'
import { dividerCommonData, dividerDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import DividerBody from './DividerBody'

export default function DividerDropdown() {
    return (
        <Col md={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={DividerDropdownTitle} subTitle={dividerDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        {dividerCommonData && dividerCommonData.map((item, index) => (
                            <Fragment key={index}>
                                <DividerBody item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
