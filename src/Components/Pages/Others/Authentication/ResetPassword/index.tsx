import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommonLogo from '../Common/CommonLogo';
import { Btn, H2, P } from '../../../../../AbstractElements';
import { CreateAccount, CreateYourPassword, Done, NewPassword, RememberPassword, RetypePassword } from '../../../../../Utils/Constants';

export default function ResetPassword() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className="page-wrapper">
            <Container fluid className="p-0">
                <Row>
                    <Col xs={12}>
                        <div className="login-card login-dark">
                            <div>
                                <div><CommonLogo /></div>
                                <div className="login-main">
                                    <Form className="theme-form" onSubmit={handleSubmit}>
                                        <H2>{CreateYourPassword}</H2>
                                        <FormGroup>
                                            <Col><Label>{NewPassword}</Label></Col>
                                            <div className="form-input position-relative">
                                                <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                                                <div className='show-hide' onClick={toggle}>
                                                    <span className={!isPasswordVisible ? 'show' : ''}></span>
                                                </div>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col><Label>{RetypePassword}</Label></Col>
                                            <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                                            <div className='show-hide' onClick={toggle}></div>
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <div className="checkbox p-0">
                                                <input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                                            </div>
                                            <Btn color='primary' className="w-100" block>{Done}</Btn>
                                        </FormGroup>
                                        <P className="mt-4 mb-0">{"Don't have account?"}
                                            <Link className="ms-2" to={`${process.env.PUBLIC_URL}/auth/sign_up`}>{CreateAccount}</Link>
                                        </P>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
