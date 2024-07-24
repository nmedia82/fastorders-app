import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SimpleAccordionTitle } from '../../../../Utils/Constants'
import { simpleAccordionSubTitle } from '../../../../Data/UiKits/Accordion'
import SimpleDemo from './SimpleDemo'

export default function SimpleAccordion() {
    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal title-line' >
                <CommonCardHeader title={SimpleAccordionTitle} subTitle={simpleAccordionSubTitle} />
                <CardBody className='collapse-space'>
                    <SimpleDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
