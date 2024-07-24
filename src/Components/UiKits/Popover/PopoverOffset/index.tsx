import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PopoverOffsetTitle } from '../../../../Utils/Constants'
import { popoverOffsetSubTitle } from '../../../../Data/UiKits/Popover'
import OffsetRight from './OffsetRight'
import OffsetLeft from './OffsetLeft'

export default function PopoverOffset() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={PopoverOffsetTitle} subTitle={popoverOffsetSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <OffsetRight />
                    <OffsetLeft />
                </CardBody>
            </Card>
        </Col>
    )
}