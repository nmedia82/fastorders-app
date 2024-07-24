import React, { useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import { TouchspinProp } from '../../../../../Types/Forms.type';

export default function CommonTouchspin({ color, arrowIcon, outline, btnClass}: TouchspinProp) {
    const [touchspinValue, setTouchspinValue] = useState(Math.floor(Math.random() * 10));

    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }

    return (
        <div className="touchspin-wrapper d-flex align-items-center justify-content-center">
            <Btn onClick={decrementHandle} color='transparent' outline={outline} className={`me-1 decrement-touchspin btn-touchspin ${btnClass ? btnClass : ''}`}>
                {arrowIcon ? <i className="fa fa-angle-left d-flex align-items-center justify-content-center" /> : <i className="fa fa-minus d-flex align-items-center justify-content-center" />}
            </Btn>
            <input className={`me-1 input-touchspin spin-outline-${color}`} type="number" value={touchspinValue} readOnly />
            <Btn onClick={incrementHandle} color='transparent' outline={outline} className={`increment-touchspin btn-touchspin ${btnClass ? btnClass : ''}`}>
                {arrowIcon ? <i className="fa fa-angle-right d-flex align-items-center justify-content-center" /> : <i className="fa fa-plus d-flex align-items-center justify-content-center" />}
            </Btn>
        </div>
    )
}
