import React from 'react'
import { TagModalProps } from '../../../../../../Types/Tasks.type'
import { Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { Btn } from '../../../../../../AbstractElements'
import { TagColor, TagName } from '../../../../../../Utils/Constants'

export default function TagModal({ tagModal, tagToggle }: TagModalProps) {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
            <ModalHeader toggle={tagToggle}>{'Create Tag'}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row className='g-3'>
                        <Col md={12}>
                            <Label>{TagName}</Label>
                            <Input type="text" required />
                        </Col>
                        <Col md={12}>
                            <Label>{TagColor}</Label>
                            <Input className="form-color d-block" type="color" defaultValue='#009DB5' />
                        </Col>
                    </Row>
                    <Btn color='success' className='me-2' onClick={tagToggle}>{'Save'}</Btn>
                    <Btn color='primary' onClick={tagToggle}>{'Cancel'}</Btn>
                </Form>
            </ModalBody>
        </Modal>
    )
}

