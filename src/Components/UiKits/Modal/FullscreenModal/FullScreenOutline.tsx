import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { FullscreenModal, UXDesigner, WebDesign, WedDesigner } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { ArrowRightCircle, ChevronsRight } from 'react-feather';
import { scrollingModalData } from '../../../../Data/UiKits/Modal';

export default function FullScreenOutline() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Full screen modal',
        button: 'Save',
        bodyClass: 'dark-modal'
    }
    return (
        <>
            <Btn color='secondary-2x' outline={true} onClick={toggle}>{FullscreenModal}</Btn>
            <CommonModal modalData={data}>
                <div className="large-modal-header">
                    <ChevronsRight />
                    <H6>{WebDesign} </H6>
                </div>
                <P className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</P>
                <div className="modal-details">
                    <div className="web-content">
                        <H6>{WedDesigner}</H6>
                        {scrollingModalData && scrollingModalData.map((item, index) => (
                            <Fragment key={index}>
                                {index === 4 && <H6>{UXDesigner}</H6>}
                                <div className='d-flex'>
                                    <div className="flex-shrink-0">
                                        <ArrowRightCircle className='svg-modal' />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <P>{item.text}</P>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </CommonModal>
        </>
    )
}
