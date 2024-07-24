import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { outlineAlertSubTitle } from '../../../../Data/UiKits/Alert'
import { OutlineAlertTitle } from '../../../../Utils/Constants'
import LightOutline from './LightOutline'
import DarkOutline from './DarkOutline'

export default function OutlineAlert() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={OutlineAlertTitle} subTitle={outlineAlertSubTitle} />
                <CardBody>
                    <LightOutline />
                    <DarkOutline />
                </CardBody>
            </Card>
        </Col>
    )
}
