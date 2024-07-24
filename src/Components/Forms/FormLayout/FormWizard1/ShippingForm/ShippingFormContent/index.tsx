import React, { ChangeEvent, useState } from 'react'
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { toast } from 'react-toastify';
import { Btn, H6, P } from '../../../../../../AbstractElements';
import { SavedAddress, ShippingInformation, ShippingMethod } from '../../../../../../Utils/Constants';
import NewAddressModal from './NewAddressModal';
import HomeAndOfficeAddress from './HomeAndOfficeAddress';
import ShippingMethods from './ShippingMethods';

export default function ShippingFormContent({ activeCallBack }: ActiveCallbackProp) {
    const [radioBoxValues, setRadioBoxValues] = useState({ address: "", shippingMethod: "", });
    const { address, shippingMethod } = radioBoxValues;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setRadioBoxValues({ ...radioBoxValues, [name]: value });
    };
    const handleBackButton = () => {
        activeCallBack(1);
    };
    const handleNextButton = () => {
        if (address !== "" && shippingMethod !== "") {
            activeCallBack(3);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    return (
        <>
            <H6>{ShippingInformation}</H6>
            <P className="f-light">{" Fill up the following information to send you the order"}</P>
            <div className="shipping-title">
                <H6 className="mb-2">{SavedAddress}</H6>
                <Btn onClick={toggle} color="primary">
                    <i className="fa fa-plus-square f-20" />
                </Btn>
                <NewAddressModal showModal={showModal} toggle={toggle} />
            </div>
            <HomeAndOfficeAddress radioBoxValues={radioBoxValues} updateFormData={updateFormData} />
            <H6 className="mt-4 mb-2">{ShippingMethod}</H6>
            <ShippingMethods radioBoxValues={radioBoxValues} updateFormData={updateFormData} handleNextButton={handleNextButton} handleBackButton={handleBackButton} />
        </>
    );
};

