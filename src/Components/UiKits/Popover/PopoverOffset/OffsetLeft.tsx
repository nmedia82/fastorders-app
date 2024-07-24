import React, { useState } from 'react'
import { Btn } from '../../../../AbstractElements';
import { PopoverOnLeft, PopoveroffsetDash50 } from '../../../../Utils/Constants';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';

export default function OffsetLeft() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <>
            <Btn color='dark' className="example-popover" id='offset' onClick={toggle} >{PopoveroffsetDash50}</Btn>
            <Popover placement="left" isOpen={popover} target="offset" toggle={toggle} offset={[-50, 0]}>
                <PopoverHeader>{PopoverOnLeft}</PopoverHeader>
                <PopoverBody>{"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."}</PopoverBody>
            </Popover>
        </>
    )
}
