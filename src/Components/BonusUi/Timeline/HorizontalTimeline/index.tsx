import React from 'react'
import { Card, CardBody, Col, ListInlineItem, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalTimelineTitle, ReadMore } from '../../../../Utils/Constants'
import { horizontalTimelineData, horizontalTimelineSubTitle } from '../../../../Data/BonusUi/Timeline'
import { Btn, H5, P } from '../../../../AbstractElements'

export default function HorizontalTimeline() {
    return (
        <Col xxl={8} xl={7} className='box-col-12'>
            <Card className='title-line'>
                <CommonCardHeader title={HorizontalTimelineTitle} subTitle={horizontalTimelineSubTitle} />
                <CardBody>
                    {horizontalTimelineData.map((data) => (
                        <Row className={`list-inline events timeline-list ${data.mainClass}`} key={data.id}>
                            {data.child.map((item) => (
                                <Col xxl={4} className={item.colClass} key={item.id}>
                                    <div>
                                        {item.verticalLine2 && <div className={item.verticalLine2}></div>}
                                        <ListInlineItem className='event-list'>
                                            <div className='px-4'>
                                                <div className={`event-date alert-light-${item.color} txt-${item.color}`}>{item.date}</div>
                                                <H5>{item.header} </H5>
                                                <P className='text-muted'>{item.paragraph}</P>
                                                <div className='read-more-btn'>
                                                    <Btn color='primary' className='px-3'>
                                                        {ReadMore}
                                                    </Btn>
                                                </div>
                                            </div>
                                        </ListInlineItem>
                                        {item.verticalLine1 && <div className={item.verticalLine1}></div>}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}

