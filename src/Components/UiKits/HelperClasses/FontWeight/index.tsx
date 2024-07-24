import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { fontWeightData, fontWeightSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { FontWeightTitle } from '../../../../Utils/Constants'

export default function FontWeight() {
    return (
        <Col xl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={FontWeightTitle} subTitle={fontWeightSubTitle} />
                <CardBody>
                    {fontWeightData && fontWeightData.map((item, index) => (
                        <div className="helper-common-box" key={index}>
                            <div className={`f-w-${item.class}`}>{item.text}</div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
