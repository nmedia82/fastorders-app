import React from 'react'
import { Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Add, AddLabel, Cancel } from '../../../../../../Utils/Constants'
import { Btn } from '../../../../../../AbstractElements'
import { RootState } from '../../../../../../ReduxToolkit/Store';
import { setModal } from '../../../../../../ReduxToolkit/Reducers/LetterBoxReducer';

export default function AddLabelModal() {
    const dispatch = useDispatch();
    const { modal } = useSelector((state: RootState) => state.email);

    return (
        <Modal isOpen={modal} toggle={() => dispatch(setModal(false))} size="lg">
            <ModalHeader toggle={() => dispatch(setModal(false))} className="fs-5">{AddLabel}</ModalHeader>
            <ModalBody>
                <Form>
                    <Row className="g-sm-3 g-2 custom-input">
                        <Col sm={2}><Label className='col-form-label'>{"Label Name :"}</Label></Col>
                        <Col sm={10}><Input type="text" /></Col>
                        <Col sm={2}><Label className='col-form-label'>{"Email :"}</Label></Col>
                        <Col sm={10}><Input type="email" /></Col>
                        <Col sm={2}><Label>{"Label Color :"}</Label></Col>
                        <Col sm={2} xs={2}><Input color="#009DB5" type="color" title="Choose your color" /></Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Btn color='light' onClick={() => dispatch(setModal(false))}>{Cancel}</Btn>
                <Btn color='primary' onClick={() => dispatch(setModal(false))}>{Add}</Btn>
            </ModalFooter>
        </Modal>
    )
}
