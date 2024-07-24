import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap';
import { AddContactFormProps, ContactFormProps } from '../../../../../../Types/Contact.type';
import { createUser } from '../../../../../../ReduxToolkit/Reducers/ContactReducer';
import { EmailAddress, Name, Phone } from '../../../../../../Utils/Constants';
import { Btn } from '../../../../../../AbstractElements';

export default function AddContactForm({ setModal, toggle }: AddContactFormProps) {
    const [validate, setValidate] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm<ContactFormProps>();
    const addContact: SubmitHandler<ContactFormProps> = (data) => {
        if (data) {
            setValidate(true);
            dispatch(createUser({ data, defaultUser: `user/user.png` }));
            setModal(false);
        } else {
            console.error('PLease check you details');
        }
    };
    return (
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addContact)} noValidate>
            <Row className="g-3">
                <Col md={12}>
                    <Label>{Name}</Label>
                    <Row className='g-3'>
                        <Col sm={6}>
                            <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''} ${validate && !errors.name ? 'is-valid' : ''}`} placeholder="First Name" {...register('name', { required: true })} />
                            {errors.name && (<FormFeedback>{errors.name && ('First name is required')}</FormFeedback>)}
                        </Col>
                        <Col sm={6}>
                            <input type="text" className={`form-control ${errors.surname ? 'is-invalid' : ''} ${validate && !errors.surname ? 'is-valid' : ''}`} placeholder="Last Name" {...register('surname', { required: true })} />
                            {errors.surname && (<FormFeedback>{errors.surname && ('Last name is required')}</FormFeedback>)}
                        </Col>
                    </Row>
                </Col>
                <Col md={12}>
                    <Label>{EmailAddress}</Label>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''} ${validate && !errors.email ? 'is-valid' : ''}`} {...register('email', { required: true })} />
                    {errors.email && (<FormFeedback>{errors.email && ('Please enter your email.')}</FormFeedback>)}
                </Col>
                <Col md={12}>
                    <Label>{Phone}</Label>
                    <Row className='g-3'>
                        <Col sm={6}>
                            <input type="number" className={`form-control ${errors.mobile ? 'is-invalid' : ''} ${validate && !errors.mobile ? 'is-valid' : ''}`} {...register('mobile', { required: true })} />
                            {errors.mobile && (<FormFeedback>{errors.mobile && ('Please enter your 10 digit mobile number')}</FormFeedback>)}
                        </Col>
                        <Col sm={6}>
                            <Input type="select">
                                <option>{'Mobile'}</option>
                                <option>{'Work'}</option>
                                <option>{'Others'}</option>
                            </Input>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Btn color='success' className='me-2'>{'Save'}</Btn>
            <Btn color='primary' onClick={toggle} >{'Cancel'}</Btn>
        </Form>
    )
}

