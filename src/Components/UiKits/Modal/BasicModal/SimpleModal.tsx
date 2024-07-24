import React, { useState } from 'react'
import { Btn, H2, Image, P } from '../../../../AbstractElements';
import { ExploreMore, Simple, SimpleText, Upto } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { dynamicImage } from '../../../../Utils';
import { ArrowRight } from 'react-feather';

export default function SimpleModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        toggler: toggle,
    }
    return (
        <>
            <Btn color='primary' onClick={toggle}>{Simple}</Btn>
            <CommonModal modalData={data}>
                <div className="modal-toggle-wrapper">
                    <H2>{Upto}<strong className="txt-danger">{'85% OFF'}</strong>{SimpleText}</H2>
                    <div className="modal-img">
                        <Image src={dynamicImage(`gif/online-shopping.gif`)} alt="online-shopping"/>
                    </div>
                    <P className="text-sm-center">
                        {"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}
                    </P>
                    <Btn color='primary' className="d-flex align-items-center gap-2 text-light ms-auto" type="button" onClick={toggle}>
                        {ExploreMore} <ArrowRight/>
                    </Btn>
                </div>
            </CommonModal>
        </>
    )
}