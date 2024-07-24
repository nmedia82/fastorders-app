import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomHeightProgressTitle } from '../../../../Utils/Constants'
import { customHeightData, customSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function CustomHeightProgress() {
    return (
        <Card className='title-line'>
            <CommonCardHeader title={CustomHeightProgressTitle} subTitle={customSubTitle} />
            <CardBody className="progress-showcase">
                <Row>
                    <Col>
                        {customHeightData && customHeightData.map((item, index) => (
                            <ProgressBar color={item.class} value={item.value} style={{ height: item.text }} key={index} />
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
