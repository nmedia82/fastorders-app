import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, PillsWithIcons } from '../../../../Utils/Constants'
import { badgeIconData, roundedPillSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function RoundedPillsIcon() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={PillsWithIcons} subTitle={roundedPillSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item, index) => (
                            <Badges color={item.color} className='rounded-circle p-2' href={Href} key={index}>
                                {item.iconName}
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
