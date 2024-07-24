import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalAlignmentTitle, HorizontalClass, HorizontalPosition } from '../../../../Utils/Constants'
import { horizontalAlignSubTitle } from '../../../../Data/UiKits/Grid'
import GridCardFooter from '../Common/GridCardFooter'
import HorizontalStart from './HorizontalStart'
import HorizontalCenter from './HorizontalCenter'
import HorizontalEnd from './HorizontalEnd'

export default function HorizontalAlignment() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={HorizontalAlignmentTitle} subTitle={horizontalAlignSubTitle} />
                <CardBody className='grid-showcase grid-align'>
                    <HorizontalStart />
                    <HorizontalCenter />
                    <HorizontalEnd />
                </CardBody>
                <GridCardFooter code={HorizontalClass} value={HorizontalPosition} />
            </Card>
        </Col >
    )
}
