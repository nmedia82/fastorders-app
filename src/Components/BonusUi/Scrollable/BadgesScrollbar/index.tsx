import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgesScrollbarTitle } from '../../../../Utils/Constants'
import { badgeScrollData, badgesScrollSubTitle } from '../../../../Data/BonusUi/Scrollable'
import { Badges, LI, OL } from '../../../../AbstractElements'

export default function BadgesScrollbar() {
    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={BadgesScrollbarTitle} subTitle={badgesScrollSubTitle} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none custom-container' autoHide>
                        <OL className="list-group list-group-numbered scroll-rtl">
                            {badgeScrollData && badgeScrollData.map((item, index) => (
                                <LI className={`d-flex align-items-start flex-wrap ${index === badgeScrollData.length - 1 ? 'justify-content-between' : ''}`} key={index}>
                                    <div className="ms-2 me-auto">{item.text}</div>
                                    <Badges color={item.class} className='p-2' pill>{item.badge}</Badges>
                                </LI>
                            ))}
                        </OL>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}
