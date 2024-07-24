import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, NumberOfBadge } from '../../../../Utils/Constants'
import { badgesData, numberBadgeSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function NumberBadges() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={NumberOfBadge} subTitle={numberBadgeSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badges href={Href} color={item.class} key={item.id}>{item.id}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
