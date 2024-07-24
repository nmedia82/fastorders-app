import React from 'react'
import { aboutDetailsData } from '../../../../../Data/Applications/SocialApp'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H5, P } from '../../../../../AbstractElements'
import { MoreVertical } from 'react-feather'

export default function AboutDetails() {
    return (
        <>
            {aboutDetailsData.map((data) => (
                <Col sm={12} key={data.id}>
                    <Card>
                        <CardHeader className="social-header">
                            <H5><span>{data.title}</span><span className="pull-right"><MoreVertical /></span></H5>
                        </CardHeader>
                        <CardBody>
                            {data.child.map((item) => (
                                <Row className="details-about" key={item.id}>
                                    {item.details.map((list) => (
                                        <Col sm={6} key={list.id}>
                                            <div className={`your-details ${list.id === 2 ? "your-details-xs" : ""}`}>
                                                <span className={`f-w-600 ${data.id === 1 ? "mb-2 d-block" : ""}`}>
                                                    {list.text}:
                                                </span>
                                                {list.year && <P>{list.year}</P>}
                                                <P>{list.paragraph}</P>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

