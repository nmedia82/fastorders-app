import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { SmallModalButton } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { fullScreenModalData } from '../../../../Data/UiKits/Modal';
import { ChevronsRight } from 'react-feather';

export default function SmallModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Small modal',
        size: 'sm',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='secondary' onClick={toggle}>{SmallModalButton}</Btn>
            <CommonModal modalData={data} >
                {fullScreenModalData && fullScreenModalData.slice(0, 3).map((item, index) => (
                    <Fragment key={index}>
                        <div className="large-modal-header">
                            <ChevronsRight/>
                            <H6>{item.title}</H6>
                        </div>
                        <P className={`modal-padding-space ${index === 2 ? 'mb-0' : ''}`}>{item.text}</P>
                    </Fragment>
                ))}
            </CommonModal>
        </>
    )
}
