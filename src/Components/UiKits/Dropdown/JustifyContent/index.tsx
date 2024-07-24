import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { JustifyContentTitle } from '../../../../Utils/Constants'
import { justifyContentSubTitle, justifyData } from '../../../../Data/UiKits/Dropdown'
import TextLeftDemo from './TextLeftDemo'
import DropdownCommon from '../Common/DropdownCommon'

export default function JustifyContent() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={JustifyContentTitle} subTitle={justifyContentSubTitle} />
                <CardBody className='dropdown-basic m-0'>
                    <div className='common-flex'>
                        <TextLeftDemo />
                        {justifyData && justifyData.map((item, index) => (
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
