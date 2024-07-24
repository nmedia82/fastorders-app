import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OffSetClass, OffSetStep, OffSetTitle } from '../../../../Utils/Constants'
import { offsetBodyData, offsetSubTitle } from '../../../../Data/UiKits/Grid'
import GridCardFooter from '../Common/GridCardFooter'

export default function OffSet() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={OffSetTitle} subTitle={offsetSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className="g-2">
                        {offsetBodyData && offsetBodyData.map((item, index) => (
                            <Col xs={item.xs} sm={item.sm} className={item.class} key={index}>
                                <span>{item.text}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <GridCardFooter code={OffSetClass} value={OffSetStep} />
            </Card>
        </Col>
    )
}
