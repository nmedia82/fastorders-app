import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicProgressBars } from '../../../../Utils/Constants'
import { basicProgressData, basicProgressSubTitle } from '../../../../Data/UiKits/Progress'
import { ProgressBar } from '../../../../AbstractElements'

export default function BasicProgress() {
    return (
        <Card className='title-line'>
            <CommonCardHeader title={BasicProgressBars} subTitle={basicProgressSubTitle} />
            <CardBody className="progress-showcase">
                <Row>
                    <Col>
                        {basicProgressData && basicProgressData.map((item, index) => (
                            <ProgressBar key={index} color={item.class} value={item.value} >{item.value}{'%'}</ProgressBar>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
