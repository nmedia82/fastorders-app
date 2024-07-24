import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { PopoverDirectionTitle, PopoverOnTop } from '../../../../Utils/Constants';
import { popoverDirectionSubTitle, popoverPositions } from '../../../../Data/UiKits/Popover';
import { Btn } from '../../../../AbstractElements';
import CommonPopover from '../Common/CommonPopover';

export default function PopoverDirection() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);

    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={PopoverDirectionTitle} subTitle={popoverDirectionSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <Btn color='success' className="example-popover" id='TopPopover' onClick={toggle}>{PopoverOnTop}</Btn>
                    <Popover placement="top" isOpen={popover} target="TopPopover" toggle={toggle}>
                        <PopoverHeader>{PopoverOnTop}</PopoverHeader>
                        <PopoverBody>{"Popovers need the tooltip plugin considering that a dependency."}</PopoverBody>
                    </Popover>
                    {popoverPositions && popoverPositions.map((item, index) => (
                        <Fragment key={index}>
                            <CommonPopover data={item} />
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
