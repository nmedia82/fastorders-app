import React from 'react'
import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonGroupTitle } from '../../../../Utils/Constants'
import { buttonGroupData, buttonGroupSubTitle } from '../../../../Data/Buttons/DefaultStyle'
import { Btn, H6 } from '../../../../AbstractElements'

export default function ButtonGroupCard() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={ButtonGroupTitle} subTitle={buttonGroupSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {buttonGroupData.map((data) => (
                            <Col xl={4} className={data.id === 3 ? "col-12" : "col-md-6"} key={data.id}>
                                <div className="card-wrapper border rounded-3 h-100">
                                    <H6 className="sub-title fw-bold">{data.title}</H6>
                                    <div className={`button-wrapper ${data.id === 1 ? "button-variation" : ""}`}>
                                        {data.child.map((item) => (
                                            <ButtonGroup className={item.btnClass} key={item.id}>
                                                {item.buttons.map((list) => (
                                                    <Btn color={list.color} outline={list.outline} size={list.size} key={list.id}>{list.title}</Btn>
                                                ))}
                                            </ButtonGroup>
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
