import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OneSidePaddingTitle, PaddingTitle } from '../../../../Utils/Constants'
import { oneSidePaddingData, oneSidePaddingSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { H4 } from '../../../../AbstractElements'

export default function OneSidePadding() {
    return (
        <Col xl={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={OneSidePaddingTitle} subTitle={oneSidePaddingSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {oneSidePaddingData.map((item) => (
                            <Col xxl={3} sm={6} key={item.id}>
                                <div className="border-wrapper h-100 light-background dark-helper">
                                    <H4 className="mb-3">{PaddingTitle} {item.title}</H4>
                                    <div className="common-p-box">
                                        {item.box.map((padding) => (
                                            <span key={padding.id}>{`.p-${padding.text}`}</span>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
