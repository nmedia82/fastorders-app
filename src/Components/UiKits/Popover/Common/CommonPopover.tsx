import React, { Fragment, useState } from 'react'
import { Btn } from '../../../../AbstractElements';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { CommonPopoverProp } from '../../../../Types/UiKits.type';

export default function CommonPopover({data}: CommonPopoverProp) {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <Fragment>
            <Btn color={`${data.btnColor}`} size={data.size} className="example-popover" id={`${'Popover-' + data.id}`}>{data.btnText}</Btn >
            <Popover placement={data.placement} isOpen={popover} target={'Popover-' + data.id}
                toggle={toggle} trigger={data.trigger}>
                <PopoverHeader>{data.popoverHeader}</PopoverHeader>
                <PopoverBody>{data.popoverBody}</PopoverBody>
            </Popover>
        </Fragment>
    )
}
