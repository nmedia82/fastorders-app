import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgeIcons, Href } from '../../../../Utils/Constants'
import { badgeIconData, badgeWithIconSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function BadgeWithIcon() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={BadgeIcons} subTitle={badgeWithIconSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item) => (
                            <Badges color={item.color} className={item.id !== 8 ? 'b-ln-height':''} href={Href} key={item.id}>
                                {item.iconName}
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
