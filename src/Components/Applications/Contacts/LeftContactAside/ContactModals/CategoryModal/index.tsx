import React, { useState } from 'react'
import { Btn } from '../../../../../../AbstractElements';
import { Col, Form, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

export default function CategoryModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Btn color='transparent' className="btn-category" onClick={toggle}><span className="title">{'+ Add Category'}</span></Btn>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Add Category'}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark">
                        <Row className="g-3">
                            <Col md={12}>
                                <Input type="text" required placeholder="Enter category name" />
                            </Col>
                        </Row>
                        <Btn color='success' className='me-2' onClick={toggle}>{'Save'}</Btn>
                        <Btn color='primary' onClick={toggle}>{'Cancel'}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

