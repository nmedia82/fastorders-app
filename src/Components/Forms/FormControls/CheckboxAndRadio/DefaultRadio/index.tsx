import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomRadiosTitle, DefaultCheckedRadio, DefaultRadioTitle, DisabledCheckedRadio, DisabledRadioSmall, DisabledRadios, RightRadios } from '../../../../../Utils/Constants'
import { defaultRadioSubTitle } from '../../../../../Data/Forms/FormControls'
import { H6 } from '../../../../../AbstractElements'

export default function DefaultRadio() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={DefaultRadioTitle} subTitle={defaultRadioSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <Col sm={6} xl={4}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <H6 className="sub-title">{CustomRadiosTitle}</H6>
                                <FormGroup check>
                                    <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
                                    <Label htmlFor="flexRadioDefault1" check>{DefaultRadioTitle}</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
                                    <Label htmlFor="flexRadioDefault2" check>{DefaultCheckedRadio}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col sm={6} xl={4}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <H6 className="sub-title">{DisabledRadios}</H6>
                                <FormGroup check>
                                    <Input id="flexRadioDisabled" type="radio" name="flexRadioDisabled" disabled />
                                    <Label htmlFor="flexRadioDisabled" check>{DisabledRadioSmall}</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input id="flexRadioCheckedDisabled" type="radio" name="flexRadioDisabled" disabled />
                                    <Label htmlFor="flexRadioCheckedDisabled" check>{DisabledCheckedRadio}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col sm={12} xl={4}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <H6 className="sub-title">{RightRadios}</H6>
                                <FormGroup check className="form-check-reverse">
                                    <Input id="flexRadioDefault3" type="radio" name="flexRadioDefault" />
                                    <Label htmlFor="flexRadioDefault3" check>{DefaultRadioTitle}</Label>
                                </FormGroup>
                                <FormGroup check className="form-check-reverse">
                                    <Input id="flexRadioCheckedDisabled1" type="radio" name="flexRadioDisabled" checked disabled />
                                    <Label htmlFor="flexRadioCheckedDisabled1" check>{DisabledCheckedRadio}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
