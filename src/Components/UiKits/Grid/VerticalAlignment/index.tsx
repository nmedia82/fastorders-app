import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { VerticalAlignmentTitle, VerticalClass, VerticalPosition } from '../../../../Utils/Constants'
import { verticalAlignSubTitle } from '../../../../Data/UiKits/Grid'
import VerticalStart from './VerticalStart'
import VerticalCenter from './VerticalCenter'
import VerticalEnd from './VerticalEnd'
import GridCardFooter from '../Common/GridCardFooter'

export default function VerticalAlignment() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={VerticalAlignmentTitle} subTitle={verticalAlignSubTitle} />
                <CardBody className='grid-showcase mb-0'>
                    <Row>
                        <VerticalStart />
                        <VerticalCenter />
                        <VerticalEnd />
                    </Row>
                </CardBody>
                <GridCardFooter code={VerticalClass} value={VerticalPosition} />
            </Card>
        </Col>
    )
}
