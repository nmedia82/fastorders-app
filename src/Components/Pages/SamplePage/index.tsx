import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { SampleCardTitle } from '../../../Utils/Constants'
import { P } from '../../../AbstractElements'
import { samplePageData, samplePageSubTitle } from '../../../Data/Pages/SamplePage'

export default function SamplePageContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card className='title-line'>
                        <CommonCardHeader title={SampleCardTitle} subTitle={samplePageSubTitle} />
                        <CardBody>
                            {samplePageData.map((item) => (
                                <P key={item.id}>
                                    <strong>{item.strongText} </strong> {item.text}
                                </P>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
