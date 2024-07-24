import React from 'react'
import { Col, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { Comments, EmailAddress, InputGroupTitle, InputWithValue, InvalidInput, Layout, OpenSelectMenu, Password, Username, UsernameFeedback2, ValidInput } from '../../../../../../Utils/Constants'
import CommonOpenMenu from '../../Common/CommonOpenMenu'
import { romanOpenMenu } from '../../../../../../Data/Forms/FormControls'
import BaseFloatingLayoutContent from './BaseFloatingLayoutContent'

export default function BasicFloatingInputBody() {
    return (
        <Col>
            <Row className="mb-3">
                <Col sm={3}><Label>{ValidInput}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingInputValue" type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                        <Label htmlFor="floatingInputValue">{InputWithValue}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{InvalidInput}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingInputInvalid" type="email" placeholder="name@example.com" defaultValue="test@example.com" invalid />
                        <Label htmlFor="floatingInputInvalid">{InvalidInput}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{Comments}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingTextarea" type="textarea" placeholder="Leave a comment here" />
                        <Label htmlFor="floatingTextarea">{Comments}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{EmailAddress}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingInput" type="email" />
                        <Label htmlFor="floatingInput">{EmailAddress}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{Password}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingPassword1" type="password" />
                        <Label htmlFor="floatingPassword1">{Password}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{Comments}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingTextarea2" type="textarea" placeholder="Leave a comment here" />
                        <Label htmlFor="floatingTextarea2">{Comments}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{OpenSelectMenu}</Label></Col>
                <CommonOpenMenu colClass='col-sm-9' inputId='floatingSelect' options={romanOpenMenu} />
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{InputGroupTitle}</Label></Col>
                <Col sm={9}>
                    <InputGroup className="mb-3">
                        <InputGroupText>{'@'}</InputGroupText>
                        <FormGroup floating>
                            <Input id="floatingInputGroup1" type="text" />
                            <Label htmlFor="floatingInputGroup1">{Username}</Label>
                        </FormGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm={3}><Label>{InputGroupTitle}</Label></Col>
                <Col sm={9}>
                    <InputGroup className="has-validation">
                        <InputGroupText>{'@'}</InputGroupText>
                        <FormGroup floating className='is-invalid'>
                            <Input id="floatingInputGroup2" type="text" className='is-invalid' required />
                            <Label htmlFor="floatingInputGroup2">{Username}</Label>
                        </FormGroup>
                        <FormFeedback>{UsernameFeedback2}</FormFeedback>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-0">
                <Col sm={3}><Label>{Layout}</Label></Col>
                <BaseFloatingLayoutContent />
            </Row>
        </Col>
    )
}
