import React from 'react'
import { useForm } from 'react-hook-form';
import { Card, CardBody, CardFooter, Col, Form, Input, Label, Row } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { AboutMe, Address, City, Company, Country, EditProfileTitle, EmailAddress, FirstName, LastName, PostalCode, UpdateProfile, Username } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import { usersCountryList } from '../../../../../Data/Applications/Users';

export default function EditProfile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onEditSubmit = () => {
        alert('Form is Submitted successfully');
    };
    return (
        <Col xl={8}>
            <Card>
                <Form onSubmit={handleSubmit(onEditSubmit)}>
                    <CommonCardHeader titleClass='card-title mb-0' title={EditProfileTitle} />
                    <CardBody>
                        <Row className='g-3'>
                            <Col md={5}>
                                <Label>{Company}</Label>
                                <input className="form-control" type="text" placeholder="Company name" {...register('company', { required: true })} /><span style={{ color: 'red' }}>{errors.company && 'Company is required'} </span>
                            </Col>
                            <Col sm={6} md={3}>
                                <Label>{Username}</Label>
                                <input className="form-control" type="text" placeholder="Username" {...register('username', { required: true })} /><span style={{ color: 'red' }}>{errors.username && 'Username is required'} </span>
                            </Col>
                            <Col sm={6} md={4}>
                                <Label>{EmailAddress}</Label>
                                <input className="form-control" type="email" placeholder="willam@gmail.com" {...register('emailAddress', { required: true })} /><span style={{ color: 'red' }}>{errors.emailAddress && 'EmailAddress is required'} </span>
                            </Col>
                            <Col sm={6} md={6}>
                                <Label>{FirstName}</Label>
                                <input className="form-control" type="text" placeholder="First name" {...register('firstName', { required: true })} /><span style={{ color: 'red' }}>{errors.firstName && 'FirstName is required'} </span>
                            </Col>
                            <Col sm={6} md={6}>
                                <Label>{LastName}</Label>
                                <input className="form-control" type="text" placeholder="Last name" {...register('lastName', { required: true })} /><span style={{ color: 'red' }}>{errors.lastName && 'LastName is required'} </span>
                            </Col>
                            <Col md={12}>
                                <Label>{Address}</Label>
                                <input className="form-control" type="text" placeholder="Home Address" {...register('address', { required: true })} /><span style={{ color: 'red' }}>{errors.address && 'Address is required'} </span>
                            </Col>
                            <Col sm={6} md={4}>
                                <Label>{City}</Label>
                                <input className="form-control" type="text" placeholder="City" {...register('city', { required: true })} /><span style={{ color: 'red' }}>{errors.city && 'City is required'} </span>
                            </Col>
                            <Col sm={6} md={3}>
                                <Label>{PostalCode}</Label>
                                <input className="form-control" type="number" placeholder="ZIP Code" {...register('postalCode', { required: true })} /><span style={{ color: 'red' }}>{errors.postalCode && 'Zip code is required'} </span>
                            </Col>
                            <Col md={5}>
                                <Label>{Country}</Label>
                                <Input type="select" className="btn-square">
                                    {usersCountryList.map((items, i) => <option key={i}>{items}</option>)}
                                </Input>
                            </Col>
                            <Col md={12}>
                                <div>
                                    <Label>{AboutMe}</Label>
                                    <Input type="textarea" rows="4" placeholder="Enter About your description" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end"> <Btn color='primary'>{UpdateProfile}</Btn> </CardFooter>
                </Form>
            </Card>
        </Col>
    )
}

