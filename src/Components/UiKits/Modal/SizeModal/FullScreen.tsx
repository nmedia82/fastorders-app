import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { FullScreenModal } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { fullScreenModalData } from '../../../../Data/UiKits/Modal';
import { ChevronsRight } from 'react-feather';

export default function FullScreen() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Extra large modal',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='info' onClick={toggle}>{FullScreenModal}</Btn>
            <CommonModal modalData={data}>
                {fullScreenModalData && fullScreenModalData.map((item, index) => (
                    <Fragment key={index}>
                        <div className="large-modal-header">
                            <ChevronsRight />
                            <H6>{item.title}</H6>
                        </div>
                        <P className="modal-padding-space">{item.text}</P>
                    </Fragment>
                ))}
            </CommonModal>
        </>
    )
}
