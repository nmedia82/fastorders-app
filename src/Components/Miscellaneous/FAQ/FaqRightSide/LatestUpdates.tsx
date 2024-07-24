import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H2, P } from '../../../../AbstractElements'
import { Href, LatestUpdatesTitle } from '../../../../Utils/Constants'
import { latestUpdatesData } from '../../../../Data/Miscellaneous/FAQ'

export default function LatestUpdates() {
    return (
        <Col lg={12}>
            <Card>
                <CardHeader className="faq-header pb-0">
                    <H2 className="d-inline-block">{LatestUpdatesTitle}</H2>
                    <span className="pull-right d-inline-block">{"See All"}</span>
                </CardHeader>
                <CardBody className="faq-body">
                    {latestUpdatesData.map((data) => (
                        <div className="d-flex updates-faq-main" key={data.id}>
                            <div className="updates-faq">
                                {data.icon}
                            </div>
                            <div className="flex-grow-1 updates-bottom-time">
                                <P>{data.name} <a href={Href}>{data.anchor}</a> {data.title}</P>
                                <P>{data.time}</P>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
