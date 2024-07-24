import React from 'react'
import { CardBody, CardHeader, Col, FormGroup, Input } from 'reactstrap'
import { Badges, H2, H6, LI, UL } from '../../../../../AbstractElements'
import { Href, ToDoList } from '../../../../../Utils/Constants'
import { todoWrapperData } from '../../../../../Data/Dashboard/Default'

export default function TodoWrapper() {
    return (
        <Col xs={12} xl={30} className="order-xl-ii todo-wrapper">
            <CardHeader className="card-no-border order-lists">
                <div className="header-top">
                    <H2>{ToDoList}<span className="f-light f-12 d-block f-w-500">{'80 Orders in a December'}</span></H2>
                    <div className="card-header-right-icon">
                        <a className="link-with-icon" href={Href}>{'+ Create'}</a>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="notification to-do-list">
                <UL className="custom-scrollbar simple-list">
                    {todoWrapperData.map((item) => (
                        <LI className="d-flex align-items-center" key={item.id}>
                            <div className={`activity-dot-${item.color}`} />
                            <div className="d-flex w-100 align-items-center">
                                <div className="checkbox-checked">
                                    <FormGroup check>
                                        <Input id={`list-${item.id}`} type="checkbox" value="" />
                                    </FormGroup>
                                </div>
                                <div>
                                    <H6>{item.title}</H6>
                                    <span className="f-w-500 f-12 f-light">{item.time}</span>
                                </div>
                                <Badges color={`light-${item.color}`} className={`txt-${item.color} ms-auto`}>{item.status}</Badges>
                            </div>
                        </LI>
                    ))}
                </UL>
            </CardBody>
        </Col>
    )
}
