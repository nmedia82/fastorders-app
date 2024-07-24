import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OrderClass, OrderPosition, OrderTitle } from '../../../../Utils/Constants'
import { gridOrderBodyData, orderSubTitle } from '../../../../Data/UiKits/Grid'
import GridCardFooter from '../Common/GridCardFooter'

export default function Order() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={OrderTitle} subTitle={orderSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className="g-2">
                        {gridOrderBodyData && gridOrderBodyData.map((item, index) => (
                            <Col xs={item.xs} sm={item.sm} className={`order-${item.order}`} key={index}>
                                <span>{item.text}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <GridCardFooter code={OrderClass} value={OrderPosition} />
            </Card>
        </Col>
    )
}
