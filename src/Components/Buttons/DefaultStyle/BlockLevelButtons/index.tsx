import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BlockLevelButtonsTitle } from '../../../../Utils/Constants'
import { blockLevelButtonsData, blockLevelButtonsSubTitle } from '../../../../Data/Buttons/DefaultStyle'
import { Btn, H6 } from '../../../../AbstractElements'

export default function BlockLevelButtons() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={BlockLevelButtonsTitle} subTitle={blockLevelButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {blockLevelButtonsData.map((data) => (
                            <Col xs={12} key={data.id}>
                                <div className="card-wrapper border rounded-3">
                                    <H6 className="sub-title fw-bold">{data.title}</H6>
                                    <div className={`d-grid gap-2 buttons-box ${data.divClass}`}>
                                        {data.buttons.map((item) => (
                                            <Btn key={item.id} color={item.color}>{item.title}</Btn>
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
