import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MarginTitle } from '../../../../Utils/Constants'
import { marginSubTitle, paddingList } from '../../../../Data/UiKits/HelperClasses'

export default function Margin() {
    return (
        <Col xl={12}>
            <Card className="title-line">
                <CommonCardHeader title={MarginTitle} subTitle={marginSubTitle} />
                <CardBody>
                    <div className="gradient-border">
                        {paddingList.map((item, index) => (
                            <div key={index} className="helper-common-box gap-0 mb-0">
                                <div className={`helper-box m-${item} border bg-light`}></div><span>{`.m-${item}`}</span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
