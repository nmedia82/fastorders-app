import React, { useState } from 'react'
import { Btn } from '../../../../AbstractElements';
import { Popoveroffset50, Popovertitle } from '../../../../Utils/Constants';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';

export default function OffsetRight() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <>
            <Btn color='primary' id='PopoverOffset' onClick={toggle} >{Popoveroffset50}</Btn>
            <Popover placement="right" isOpen={popover} target="PopoverOffset" toggle={toggle} offset={[50, 0]}>
                <PopoverHeader>{Popovertitle}</PopoverHeader>
                <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
            </Popover>
        </>
    )
}
