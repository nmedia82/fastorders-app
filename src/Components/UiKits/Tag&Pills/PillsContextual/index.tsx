import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PillsContextualTitle } from '../../../../Utils/Constants'
import { badgesData, pillsContextualSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function PillsContextual() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={PillsContextualTitle} subTitle={pillsContextualSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badges className="rounded-pill" color={item.class} key={item.id}>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
