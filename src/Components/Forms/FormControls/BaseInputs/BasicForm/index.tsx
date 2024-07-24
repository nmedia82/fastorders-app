import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicFormTitle, CheckMeOut, EmailAddress, Password, SignIn } from '../../../../../Utils/Constants'
import { basicFormSubTitle } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'

export default function BasicForm() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={BasicFormTitle} subTitle={basicFormSubTitle} />
                <CardBody>
                    <div className="card-wrapper border rounded-3">
                        <Form onSubmit={handleSubmit}>
                            <Row className="g-3">
                                <Col md={12}>
                                    <Label>{EmailAddress}</Label>
                                    <Input type="email" placeholder="Enter Your Email" />
                                </Col>
                                <Col md={12}>
                                    <Label>{Password}</Label>
                                    <Input type="password" placeholder="Enter Your Password" />
                                </Col>
                                <Col xs={12}>
                                    <FormGroup className="checkbox-checked" check>
                                        <Label check> <Input type="checkbox" />{CheckMeOut}</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs={12}>
                                    <Btn color='primary'>{SignIn}</Btn>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
