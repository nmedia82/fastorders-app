import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderWarningTitle } from '../../../../Utils/Constants'
import { borderPrimarySubTitle, borderWarningData } from '../../../../Data/BonusUi/CreativeCard'
import { LI, OL } from '../../../../AbstractElements'

export default function BorderWarning() {
    return (
        <Col md={6} xl={4}>
            <Card className='height-equal'>
                <CommonCardHeader title={BorderWarningTitle} subTitle={borderPrimarySubTitle} headClass='border-l-warning border-3' />
                <CardBody>
                    <OL className="list-group list-group-numbered">
                        {borderWarningData.map((item) => (
                            <LI className={`txt-${item.color} fw-bold`} key={item.id}>
                                {item.text}
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}
