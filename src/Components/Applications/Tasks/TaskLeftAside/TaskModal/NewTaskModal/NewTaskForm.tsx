import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NewTaskFormProps, TaskItems } from '../../../../../../Types/Tasks.type';
import { addNewTask } from '../../../../../../ReduxToolkit/Reducers/TasksReducer';
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn } from '../../../../../../AbstractElements';
import { SubTaskTitle, TaskTitleLabel } from '../../../../../../Utils/Constants';
import DateDetailsInputs from './DateDetailsInputs';

export default function NewTaskForm({ setAddModal, toggle }: NewTaskFormProps) {
    const [validate, setValidate] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm<TaskItems>();
    const addTask = (data: TaskItems) => {
        if (data.title && data.collection && data.description) {
            dispatch(addNewTask(data));
            setValidate(true);
            setAddModal(false);
        } else {
            console.error('Please submit valid details')
        }
    };
    return (
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addTask)} noValidate>
            <Row className='g-3'>
                <Col md={12}>
                    <Label>{TaskTitleLabel}</Label>
                    <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''} ${validate && !errors.title ? 'is-valid' : ''}`} {...register('title', { required: true })} />
                    {errors.title && (<FormFeedback>{errors.title && ('Task title is required')}</FormFeedback>)}
                </Col>
                <Col md={12}>
                    <Label>{SubTaskTitle}</Label>
                    <input type="text" className={`form-control ${errors.collection ? 'is-invalid' : ''} ${validate && !errors.collection ? 'is-valid' : ''}`} {...register('collection', { required: true })} />
                    {errors.collection && (<FormFeedback>{errors.collection && ('Sub task is required')}</FormFeedback>)}
                </Col>
                <Col md={12}>
                    <DateDetailsInputs />
                </Col>
                <Col md={6}>
                    <Input type="select" className="js-example-basic-single">
                        <option value="task">{'My Task'}</option>
                    </Input>
                </Col>
                <Col md={6}>
                    <Input type="select" className="js-example-disabled-results">
                        <option value="general">{'General'}</option>
                    </Input>
                </Col>
                <Col md={12}>
                    <FormGroup className="my-0">
                        <input type="textarea" className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: true })} />
                        {errors.description && (<FormFeedback>{errors.description && ('Description is required')}</FormFeedback>)}
                    </FormGroup>
                </Col>
            </Row>
            <Btn color='secondary' className='me-2'>{'Save'}</Btn>
            <Btn color='primary' onClick={toggle} >{'Cancel'}</Btn>
        </Form>
    );
}
