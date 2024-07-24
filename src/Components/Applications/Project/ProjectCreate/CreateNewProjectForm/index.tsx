import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { setProjects } from '../../../../../ReduxToolkit/Reducers/Applications/ProjectReducer';
import { RegisterType } from '../../../../../Types/Project.type';
import { Btn } from '../../../../../AbstractElements';
import { Add, Big, Cancel, ClientName, EnterSomeDetails, Medium, ProjectRate, ProjectSize, ProjectTitleLabel, Small } from '../../../../../Utils/Constants';
import DropItems from './DropItems';
import StartEndDate from './StartEndDate';
import UploadFile from './UploadFile';

export default function CreateNewProjectForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm<RegisterType>();
    const addProject: SubmitHandler<RegisterType> = (data) => {
        const projectData = { ...data, customer1: "user/3.jpg", like: "5", progress: "100", badge: "Done", customer2: "user/5.jpg", customer3: "user/1.jpg", image: "user/3.jpg", sites: "Themeforest, australia", issue: "40", resolved: "40", comment: "20", };
        dispatch(setProjects(projectData));
        navigate("/applications/project/project_list");
    };
    return (
        <Form className="theme-form" onSubmit={handleSubmit(addProject)}>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>{ProjectTitleLabel}</Label>
                        <input className="form-control" type="text" placeholder="Project name *" {...register("title", { required: true })} />
                        <span style={{ color: "red" }}>{errors.title && "Title is required"}</span>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>{ClientName}</Label>
                        <input className="form-control" type="text" placeholder="Name client or company name" {...register("client_name", { required: true })} />
                        <span style={{ color: "red" }}>{errors.client_name && "Client Name is required"}</span>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <Label>{ProjectRate}</Label>
                        <input className="form-control" type="number" defaultValue="10" placeholder="Enter project Rate" {...register("rate", { required: true })} />
                    </FormGroup>
                </Col>
                <DropItems />
            </Row>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <Label>{ProjectSize}</Label>
                        <Input type="select">
                            <option>{Small}</option>
                            <option>{Medium}</option>
                            <option>{Big}</option>
                        </Input>
                    </FormGroup>
                </Col>
                <StartEndDate />
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>{EnterSomeDetails}</Label>
                        <textarea className="form-control" rows={3} {...register("description", { required: true })} />
                        <span style={{ color: "red" }}>{errors.description && "Some Details is required"}</span>
                    </FormGroup>
                </Col>
            </Row>
            <UploadFile />
            <Row>
                <Col>
                    <div className="text-end">
                        <Btn color="success" className="me-3">{Add}</Btn>
                        <Btn color="danger">{Cancel}</Btn>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}
