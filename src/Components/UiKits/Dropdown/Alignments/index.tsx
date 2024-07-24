import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AlignmentsTitle } from '../../../../Utils/Constants'
import { alignmentData, alignmentsSubTitle } from '../../../../Data/UiKits/Dropdown'
import AlignTopDemo from './AlignTopDemo'
import DropdownCommon from '../Common/DropdownCommon'

export default function Alignments() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={AlignmentsTitle} subTitle={alignmentsSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <AlignTopDemo />
                        {alignmentData && alignmentData.map((item, index) => (
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
