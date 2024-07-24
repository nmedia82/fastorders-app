import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { InputMaskTitle } from '../../../../Utils/Constants'
import { inputMasksSubTitle } from '../../../../Data/Forms/FormControls'
import DateFormat from './DateFormat'
import TimeFormat from './TimeFormat'
import DefaultInputMask from './DefaultInputMask'

export default function InputMaskContainer() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <Card>
                        <CommonCardHeader title={InputMaskTitle} subTitle={inputMasksSubTitle} />
                        <CardBody className='input-mask'>
                            <Row className='g-3'>
                                <DateFormat />
                                <TimeFormat />
                                <DefaultInputMask />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
