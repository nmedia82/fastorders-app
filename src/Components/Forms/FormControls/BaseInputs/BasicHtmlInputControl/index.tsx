import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicHtmlInputControlTitle } from '../../../../../Utils/Constants'
import { basicHTMLInputControlSubTitle } from '../../../../../Data/Forms/FormControls'
import BasicHtmlInputBody from './BasicHtmlInputBody'
import CardFooterSection from '../Common/CardFooterSection'

export default function BasicHtmlInputControl() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader title={BasicHtmlInputControlTitle} subTitle={basicHTMLInputControlSubTitle} />
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <CardBody className="custom-input">
                        <BasicHtmlInputBody />
                    </CardBody>
                    <CardFooterSection />
                </Form>
            </Card>
        </Col>
    )
}

