import React from 'react'
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { FlatInputStyleTitle, MultiplePaintingTitle, PleaseComments, RomanNumberTitle } from '../../../../../Utils/Constants'
import { flatInputStyleSubTitle, multiplePaintingFlatData, romanFlatInputData } from '../../../../../Data/Forms/FormControls'
import CommonSelectDropdown from '../Common/CommonSelectDropdown'

export default function FlatInputStyle() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={FlatInputStyleTitle} subTitle={flatInputStyleSubTitle} />
                <Form className="theme-form dark-inputs">
                    <CardBody>
                        <Row>
                            <CommonSelectDropdown title={RomanNumberTitle} inputClass='btn-square digits' options={romanFlatInputData} />
                        </Row>
                        <Row>
                            <CommonSelectDropdown title={MultiplePaintingTitle} options={multiplePaintingFlatData} inputClass='btn-square digits' multiple={true} optionClass='rounded-0' />
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Label htmlFor="exampleFormControlTextarea14">{PleaseComments}</Label>
                                    <Input type="textarea" className="btn-square" id="exampleFormControlTextarea14" rows="3"></Input>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>
        </Col>
    )
}
