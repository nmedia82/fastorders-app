import React from 'react'
import { Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { TagModalProps } from '../../../../../Types/Bookmark.type'
import { Cancel, CreateTag, Save, TagColor, TagName } from '../../../../../Utils/Constants'
import { Btn } from '../../../../../AbstractElements'

export default function TagModal({ showModal, modalToggle }: TagModalProps) {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={showModal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>{CreateTag}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row className="g-3">
                        <Col md={12}>
                            <Label>{TagName}</Label>
                            <Input type="text" required />
                        </Col>
                        <Col md={12}>
                            <Label>{TagColor}</Label>
                            <Input className="form-color d-block" type="color" defaultValue='#009DB5' required />
                        </Col>
                    </Row>
                    <Btn color='success' className='me-2' onClick={modalToggle}>{Save}</Btn>
                    <Btn color='primary' onClick={modalToggle}>{Cancel}</Btn>
                </Form>
            </ModalBody>
        </Modal>
    )
}

