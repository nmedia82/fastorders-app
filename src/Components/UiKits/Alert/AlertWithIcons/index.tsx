import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AlertWithIconsTitle } from '../../../../Utils/Constants'
import { alertWithIconSubTitle } from '../../../../Data/UiKits/Alert'
import TimeAlert from './TimeAlert'
import HeartAlert from './HeartAlert'

export default function AlertWithIcons() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={AlertWithIconsTitle} subTitle={alertWithIconSubTitle} />
                <CardBody className='dark-txt'>
                    <TimeAlert />
                    <HeartAlert />
                </CardBody>
            </Card>
        </Col>
    )
}
