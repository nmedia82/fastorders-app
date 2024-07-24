import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H2, H4, P } from '../../../AbstractElements'
import { LatestArticlesVideosTitle } from '../../../Utils/Constants'
import { LatestArticlesVideosProps } from '../../../Types/Miscellaneous.type'

export default function LatestArticlesVideos({titleClass, rowClass, divClass, data }: LatestArticlesVideosProps) {
    return (
        <Col lg={12}>
            <div className="header-faq"><H2 className={`mb-0 ${titleClass}`}>{LatestArticlesVideosTitle}</H2></div>
            <Row className={rowClass}>
                {data.map((data) => (
                    <Col xl={4} className={data.id !== 3 ? 'col-md-6' : ''} key={data.id}>
                        <Row>
                            {data.child.map((item) => (
                                <Col key={item.id} className={item.colClass}>
                                    <Card>
                                        <CardBody>
                                            <div className={`d-flex ${divClass}`}>
                                                {item.icon}
                                                <div className="flex-grow-1">
                                                    <H4 className="f-w-500">{item.title}</H4>
                                                    <P>{item.text}</P>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
