import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { H4 } from '../../../../../AbstractElements'
import { BirthDate, Email, FullName, Password, PersonalDetailsTitle, PhoneNumber, RepeatPassword } from '../../../../../Utils/Constants'
import { days, months, years } from '../../../../../Data/Miscellaneous/JobSearch'

export default function PersonalDetails() {
    return (
        <>
            <H4 className="f-w-600 mb-0">{PersonalDetailsTitle}</H4>
            <Form className='theme-form'>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor='exampleFormControlInput1'>
                                {FullName}:<span className='font-danger'>{'*'}</span>
                            </Label>
                            <Input id='exampleFormControlInput1' type='text' placeholder='Enter your full name' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor='exampleFormControlInput3'>
                                {Email}:<span className='font-danger'>{'*'}</span>
                            </Label>
                            <Input id='exampleFormControlInput3' type='email' placeholder='Enter email' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor='exampleFormControlpassword'>
                                {Password}:<span className='font-danger'>{'*'}</span>
                            </Label>
                            <Input id='exampleFormControlpassword' type='password' placeholder='Enter password' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor='exampleFormControlpassword1'>
                                {RepeatPassword}:<span className='font-danger'>{'*'}</span>
                            </Label>
                            <Input id='exampleFormControlpassword1' type='password' placeholder='Repeat password' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className='select-date'>
                    <Label className='pt-0'>{BirthDate}</Label>
                    <Col sm={4}>
                        <FormGroup>
                            <Col>
                                <Typeahead id='basic-typeahead' labelKey='name' placeholder="Month" options={months} />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Col>
                                <Typeahead id='basic-typeahead' labelKey='name' placeholder="Day" options={days} />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Col>
                                <Typeahead id='basic-typeahead' labelKey='name' placeholder="Year" options={years} />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor='exampleFormControlInput4'>{PhoneNumber}:</Label>
                            <Input id='exampleFormControlInput4' type='number' placeholder='Enter Phone no.' />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
