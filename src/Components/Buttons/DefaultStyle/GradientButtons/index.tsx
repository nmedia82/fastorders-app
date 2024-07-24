import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { GradientButtonsTitle } from '../../../../Utils/Constants'
import { gradientButtonsData, gradientButtonsSubTitle } from '../../../../Data/Buttons/DefaultStyle'
import { Btn, H6 } from '../../../../AbstractElements'

export default function GradientButtons() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={GradientButtonsTitle} subTitle={gradientButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {gradientButtonsData.map((data) => (
                            <Col xl={4} sm={data.sm} key={data.id}>
                                <div className="card-wrapper border rounded-3 bg-light">
                                    <H6 className="sub-title fw-bold">{data.title}</H6>
                                    <div className="common-flex">
                                        {data.buttons.map((item) => (
                                            <Btn key={item.id} color={item.color} className={item.btnClass}>{item.text}</Btn>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
