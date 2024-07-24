import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommonLogo from '../Common/CommonLogo';
import { Btn, H2, P } from '../../../../../AbstractElements';
import { EnterYourPassword, RememberPassword, SignIn, Unlock } from '../../../../../Utils/Constants';

export default function UnlockUser() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const [formData, setFormData] = useState({ password: '', checkbox1: false, });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setFormData({ password: '', checkbox1: false, });
    };
    return (
        <div className="page-wrapper">
            <Container fluid className="p-0">
                <div className="authentication-main mt-0">
                    <Row>
                        <Col xs={12}>
                            <div className="login-card login-dark">
                                <div>
                                    <div><CommonLogo /></div>
                                    <div className="login-main">
                                        <Form className="theme-form" onSubmit={handleSubmit}>
                                            <H2>{Unlock}</H2>
                                            <FormGroup>
                                                <Col><Label>{EnterYourPassword}</Label></Col>
                                                <div className="form-input position-relative">
                                                    <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" value={formData.password} onChange={handleInputChange} />
                                                    <div className='show-hide' onClick={toggle}><span className={!isPasswordVisible ? 'show' : ''}></span></div>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="mb-0">
                                                <div className="checkbox p-0">
                                                    <Input id="checkbox1" type="checkbox" checked={formData.checkbox1} onChange={handleInputChange} />
                                                    <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                                                </div>
                                                <Btn color='primary' className="w-100" block>{Unlock}</Btn>
                                            </FormGroup>
                                            <P className="mt-4 mb-0">{"Already have an account?"}
                                                <Link to={`${process.env.PUBLIC_URL}/auth/login`} className='ms-2'>{SignIn}</Link>
                                            </P>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

