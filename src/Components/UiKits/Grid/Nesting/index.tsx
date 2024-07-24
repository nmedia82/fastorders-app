import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NestingTitle } from '../../../../Utils/Constants'
import { nestingSubTitle } from '../../../../Data/UiKits/Grid'
import NestingLevel1 from './NestingLevel1'
import NestingLevel2 from './NestingLevel2'

export default function Nesting() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={NestingTitle} subTitle={nestingSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className='g-3'>
                        <Col xs={3}><span>{'Level 1: .col-3'}</span></Col>
                            <NestingLevel1/>
                            <NestingLevel2/>
                        <Col xs={4}><span>{'Level 2: .col-4'}</span></Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}
