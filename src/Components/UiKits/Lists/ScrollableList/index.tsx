import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ScrollableListTitle } from '../../../../Utils/Constants'
import { scrollableListData, scrollableListSubTitle } from '../../../../Data/UiKits/Lists'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ScrollableList() {
    return (
        <Col xxl={4}>
            <Card className='title-line'>
                <CommonCardHeader title={ScrollableListTitle} subTitle={scrollableListSubTitle} />
                <CardBody>
                    <UL className='pt-0 main-lists-content scrollbar-wrapper custom-scrollbar list-content'>
                        {scrollableListData && scrollableListData.map((item, index) => (
                            <LI className={`list-group-item-action list-hover-primary ${index === 0 && 'active'}`} key={index}>
                                <div className="list-wrapper gap-0">
                                    <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile"/>
                                    <div className="list-content">
                                        <H6>{item.head}</H6>
                                        <P>{item.mail}</P>
                                        <small className={index !== 0 ? 'text-muted' : ''}>{item.small}</small>
                                    </div>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
