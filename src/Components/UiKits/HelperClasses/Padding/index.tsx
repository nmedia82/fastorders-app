import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PaddingTitle } from '../../../../Utils/Constants'
import { paddingList, paddingSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { H4 } from '../../../../AbstractElements'

export default function Padding() {
    return (
        <Col xl={12}>
            <Card className="title-line">
                <CommonCardHeader title={PaddingTitle} subTitle={paddingSubTitle} />
                <CardBody>
                    <div className="border-wrapper h-100 light-background dark-helper">
                        <H4 className="mb-3">{PaddingTitle}</H4>
                        <div className="helper-common-box helper-p-wrapper">
                            {paddingList.map((item, index) => (
                                <div key={index} className={`helper-p-box p-${item} bg-light border`}>
                                    <span>{`.p-${item}`}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
