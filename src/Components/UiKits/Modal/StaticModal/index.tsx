import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { StaticBackdropModal, StaticModalTitle, YuriLogin } from '../../../../Utils/Constants';
import { staticModalSubTitle } from '../../../../Data/UiKits/Modal';
import { Btn, H3, P } from '../../../../AbstractElements';
import CommonModal from '../Common/CommonModal';
import StaticModalForm from '../Common/StaticModalForm';

export default function StaticModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }

    return (
        <Col xl={4}>
            <Card className='title-line'>
                <CommonCardHeader title={StaticModalTitle} subTitle={staticModalSubTitle} />
                <CardBody>
                    <Btn color='primary' onClick={toggle} >{StaticBackdropModal}</Btn>
                    <CommonModal modalData={ModalData}>
                        <div className='modal-toggle-wrapper'>
                            <H3>{YuriLogin}</H3>
                            <P>{'Fill in your information below to continue.'}</P>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </CardBody>
            </Card>
        </Col>
    )
}
