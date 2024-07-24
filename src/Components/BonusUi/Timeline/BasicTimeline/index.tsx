import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicTimelineTitle } from '../../../../Utils/Constants'
import { basicTimeLineData, basicTimelineSubTitle } from '../../../../Data/BonusUi/Timeline'
import { H6, LI, P, UL } from '../../../../AbstractElements'

export default function BasicTimeline() {
    return (
        <Col xl={6} className=' box-col-6 notification main-timeline'>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={BasicTimelineTitle} subTitle={basicTimelineSubTitle} />
                <CardBody className='dark-timeline'>
                    <UL className='simple-list timeline-lists'>
                        {basicTimeLineData && basicTimeLineData.map((item, index) => (
                            <LI className="d-flex" key={index}>
                                <div className={`timeline-dot-${item.class}`} />
                                <div className="w-100 ms-3">
                                    <P className="d-flex justify-content-between mb-2">
                                        <span className="date-content light-background">{item.date}</span>
                                        <span>{item.time}</span>
                                    </P>
                                    <H6>{item.title}<span className="dot-notification" /></H6>
                                    <P className="f-light">{item.text}</P>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
