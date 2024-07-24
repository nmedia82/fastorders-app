import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { WhetherIconsWithAnimations } from '../../../Utils/Constants'
import { weatherIconData } from '../../../Data/Icons/WhetherIcon'

export default function WhetherIconContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card className='title-line'>
                        <CommonCardHeader title={WhetherIconsWithAnimations} />
                        <CardBody>
                            <Row className='icon-lists whether-icon'>
                                {weatherIconData.map((icon, i) => (
                                    <Col lg={2} sm={4} xs={6} key={i}>
                                        {icon.icon}
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
