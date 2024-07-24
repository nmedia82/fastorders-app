import React from 'react'
import { Col, Form, FormFeedback, FormGroup, Input, Label, ModalBody, Row } from 'reactstrap'
import { EmailAddress, FirstName, LastName, LooksGood, SignUp } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';

export default function YuriModalForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <ModalBody>
            <Form className="needs-validation" onSubmit={handleSubmit}>
                <Row className='g-3'>
                    <Col md={6}>
                        <Label htmlFor="validationCustom01">{FirstName}</Label>
                        <Input id="validationCustom01" type="text" placeholder="Enter your first-name" required={true} />
                        <FormFeedback valid>{LooksGood}</FormFeedback>
                    </Col>
                    <Col md={6}>
                        <Label htmlFor="validationCustom02">{LastName}</Label>
                        <Input id="validationCustom02" type="text" placeholder="Enter your last-name" required={true} />
                        <FormFeedback valid>{LooksGood}</FormFeedback>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label htmlFor="exampleFormControlInput1">{EmailAddress}</Label>
                            <Input id="exampleFormControlInput1" type="email" placeholder="yuritheme@gmail.com" />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup check>
                            <Input id="flexCheckDefault" type="checkbox" />
                            <Label htmlFor="flexCheckDefault" check>{'You accept our Terms and Privacy Policy by clicking Submit below.'}</Label>
                        </FormGroup>
                        <Btn color='primary'>{SignUp}</Btn>
                    </Col>
                </Row>
            </Form>
        </ModalBody>
    )
}
