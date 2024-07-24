import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H2, H3, P } from '../../../../AbstractElements'
import { Display, DisplayHeadingTitle } from '../../../../Utils/Constants'
import { dynamicNumber } from '../../../../Utils'

export default function DisplayHeading() {
    return (
        <Col xs={12}>
            <Card className='title-line'>
                <CardHeader>
                    <H2 className="mb-0">{DisplayHeadingTitle}</H2>
                    <P className="f-m-light mt-1">
                        {"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "}
                        <mark>{'display heading'}</mark>{'larger, slightly more opinionated heading style.'}
                    </P>
                </CardHeader>
                <CardBody className='d-flex flex-column gap-2'>
                    {dynamicNumber(4).map((item, index) => (
                        <H3 key={index} className={`display-${item}`}>{Display} {item}</H3>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}