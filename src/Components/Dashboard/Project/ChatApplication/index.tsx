import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { ChatApplicationTitle } from '../../../../Utils/Constants'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import ChatAppWrapper from './ChatAppWrapper'

export default function ChatApplication() {
    return (
        <Col xl={5}>
            <Card className="height-equal title-line">
                <Row>
                    <Col xxl={6} xl={12} sm={6} className="box-col-12 col-xxl-100">
                        <CardHeaderSpan headerClass='card-no-border' heading={ChatApplicationTitle} spanClass='f-w-500' span='Live Chart' />
                        <ChatAppWrapper/>
                    </Col>
                    <Col xxl={6} sm={6} className="box-col-none d-xxl-none2">
                        <CardBody className="project-banner">
                            <Image className="img-fluid" src={dynamicImage(`dashboard-3/banner.png`)} alt="banner" />
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
