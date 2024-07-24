import React from 'react'
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Bio, EmailAddress, MyProfileTitle, Password, Save, Website } from '../../../../../Utils/Constants'
import { Btn, H3, H4, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function MyProfile() {
    return (
        <Col xl={4}>
            <Card className='title-line'>
                <CommonCardHeader titleClass='card-title mb-0' title={MyProfileTitle} />
                <CardBody>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row className="g-3">
                            <Col xs={12}>
                                <div className="profile-title">
                                    <Image className="img-70 rounded-circle" alt="" src={dynamicImage(`user/7.jpg`)} />
                                    <div className="flex-grow-1">
                                        <H3 className="mb-1 f-w-600">{'MARK JECNO'}</H3>
                                        <P>{'DESIGNER'}</P>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <H4><Label>{Bio}</Label></H4>
                                <Input type="textarea" rows="5" defaultValue='UI/UX Designer | Passionate about Creating Seamless User Experiences.' />
                            </Col>
                            <Col xs={12}>
                                <Label>{EmailAddress}</Label>
                                <Input type="email" placeholder="your-email@domain.com" />
                            </Col>
                            <Col xs={12}>
                                <Label>{Password}</Label>
                                <Input type="password" defaultValue='password' />
                            </Col>
                            <Col xs={12}>
                                <Label>{Website}</Label>
                                <Input placeholder="https://themeforest.net/user/pixelstrap/portfolio" type="url" />
                            </Col>
                            <div className="form-footer">
                                <Btn color='primary'>{Save}</Btn>
                            </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
