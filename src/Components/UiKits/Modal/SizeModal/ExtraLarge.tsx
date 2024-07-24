import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { ExtraLargeModal } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { fullScreenModalData } from '../../../../Data/UiKits/Modal';
import { ChevronsRight } from 'react-feather';

export default function ExtraLarge() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Extra large modal',
        size: 'xl',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='primary' onClick={toggle}>{ExtraLargeModal}</Btn>
            <CommonModal modalData={data} >
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
