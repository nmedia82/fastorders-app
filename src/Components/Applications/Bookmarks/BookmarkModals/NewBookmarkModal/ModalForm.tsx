import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap';
import { FormData, NewBookmarkModalFormType } from '../../../../../Types/Bookmark.type';
import { addNewBookmark } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { Btn } from '../../../../../AbstractElements';
import { Cancel, Collection, Description, Group, Save, Title, WebUrl } from '../../../../../Utils/Constants';

export default function ModalForm({ addCallback, modalToggle }: NewBookmarkModalFormType) {
    const dispatch = useDispatch();
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        if (data.url && data.title && data.description) {
            setValidate(true);
            dispatch(addNewBookmark({ data, img_url: 'lightgallry/01.jpg' }));
            addCallback(true);
        } else {
            console.error('Please fill correct details');
        }
    };
    return (
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row className="g-3">
                <Col md={12}>
                    <Label>{WebUrl}</Label>
                    <input type='text' className={`form-control ${errors.url ? 'is-invalid' : ''} ${validate && !errors.url ? 'is-valid' : ''}`} {...register('url', { required: true })} />
                    {errors.url && (<FormFeedback>{errors.url.message}</FormFeedback>)}
                </Col>
                <Col md={12}>
                    <Label>{Title}</Label>
                    <input type='text' className={`form-control ${errors.title ? 'is-invalid' : ''} ${validate && !errors.title ? 'is-valid' : ''}`} {...register('title', { required: true })} />
                    {errors.title && (<FormFeedback>{errors.title.message}</FormFeedback>)}
                </Col>
                <Col md={12}>
                    <Label>{Description}</Label>
                    <input type='textarea' className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: true })} />
                    {errors.description && (<FormFeedback>{errors.description.message}</FormFeedback>)}
                </Col>
                <Col md={6}>
                    <Label>{Group}</Label>
                    <Input type='select'>
                        <option value="bookmark">{'My Bookmarks'}</option>
                    </Input>
                </Col>
                <Col md={6}>
                    <Label>{Collection}</Label>
                    <Input type='select'>
                        <option value="general">{'General'}</option>
                        <option value="fs">{'fs'}</option>
                    </Input>
                </Col>
            </Row>
            <Btn color='success' className='me-2'>{Save}</Btn>
            <Btn color='primary' onClick={modalToggle}>{Cancel}</Btn>
        </Form>
    )
}

