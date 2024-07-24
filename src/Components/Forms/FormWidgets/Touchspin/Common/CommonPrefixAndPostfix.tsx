import React, { useState } from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { Post, Pre } from '../../../../../Utils/Constants';
import { CommonPrefixAndPostfixProp } from '../../../../../Types/Forms.type';

export default function CommonPrefixAndPostfix({ postIcon, preIcon, preButton, PostButton, color }: CommonPrefixAndPostfixProp) {
    const [touchspinValue, setTouchspinValue] = useState(0);
    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }

    return (
        <InputGroup>
            <Btn color="transparent" onClick={decrementHandle} className={`decrement-touchspin btn-touchspin px-3 touchspin-${color ? "warning" : "primary"}`}>
                <i className="fa fa-minus" />
            </Btn>
            {preIcon ? <InputGroupText>{'$'}</InputGroupText> : ""}
            {preButton ? (<Btn className='px-2' outline color="warning" >{Pre}</Btn>) : ("")}
            <Input className="input-touchspin spin-outline-primary" type="number" value={touchspinValue} readOnly />
            {postIcon ? <InputGroupText>{'%'}</InputGroupText> : ""}
            {PostButton ? (<Btn className='px-2' outline color="warning">{Post}</Btn>) : ("")}
            <Btn color="transparent" onClick={incrementHandle} className={`increment-touchspin btn-touchspin px-3 touchspin-${color ? "warning" : "primary"}`}>
                <i className="fa fa-plus"> </i>
            </Btn>
        </InputGroup>
    );
}

