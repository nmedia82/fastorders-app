import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonVariationsTitle } from '../../../../Utils/Constants'
import { buttonVariationsSubTitle } from '../../../../Data/Buttons/DefaultStyle'
import VerticalVariation from './VerticalVariation'
import HorizontalVariation from './HorizontalVariation'
import ButtonToolbarCard from './ButtonToolbar'

export default function ButtonVariations() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={ButtonVariationsTitle} subTitle={buttonVariationsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <VerticalVariation />
                        <Col md={6}>
                            <Row className="g-3">
                                <HorizontalVariation />
                                <ButtonToolbarCard/>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
