import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { InfoColorHeaderTitle, WebDesignerText, YuriTheme } from '../../../../Utils/Constants'
import { H5, H6, P } from '../../../../AbstractElements'

export default function InfoColorHeader() {
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader headClass='bg-primary' title={InfoColorHeaderTitle} titleClass='text-white' />
                <CardBody>
                    <H5 className='pb-2'> {WebDesignerText} </H5>
                    <P className='mb-0'>
                        {"By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity."}
                    </P>
                </CardBody>
                <CardFooter>
                    <H6 className='mb-0 text-end'>{YuriTheme}</H6>
                </CardFooter>
            </Card>
        </Col>
    )
}
