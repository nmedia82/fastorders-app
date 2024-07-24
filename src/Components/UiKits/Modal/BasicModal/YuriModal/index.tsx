import React, { useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import { Modal, ModalHeader } from 'reactstrap';
import { OpenModalYuri, YuriSignUp } from '../../../../../Utils/Constants';
import YuriModalForm from './YuriModalForm';

export default function YuriModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    return (
        <>
            <Btn color='secondary' onClick={toggle}>{OpenModalYuri}</Btn>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <ModalHeader className="justify-content-center border-0">{YuriSignUp}</ModalHeader>
                    <YuriModalForm />
                </div>
            </Modal>
        </>
    )
}