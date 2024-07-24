import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomListTitle } from '../../../../Utils/Constants'
import { customListData, customListSubTitle } from '../../../../Data/UiKits/Lists'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function CustomList() {
    return (
        <Col md={12}>
            <Card className='title-line'>
                <CommonCardHeader title={CustomListTitle} subTitle={customListSubTitle} />
                <CardBody>
                    <UL className='main-lists-contents list-content'>
                        {customListData && customListData.map((item, index) => (
                            <LI className={`list-group-item-action ${item.class}`} key={index}>
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    <div className="list-wrapper">
                                        <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile"/>
                                        <div className="list-content">
                                            <H4 className={index === 0 ? "txt-light":""}>{item.head}</H4>
                                            <P>{item.mail}</P>
                                        </div>
                                    </div>
                                    <small>{item.span}</small>
                                </div>
                                <P className="mb-1">{item.subtext}</P>
                                <small className={index !== 0 ?'text-muted':''}>{item.follower}</small>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}

