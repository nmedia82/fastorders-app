import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { BasicPopoverTitle, HurryUp } from '../../../../Utils/Constants';
import { basicPopoverData, basicPopoverSubTitle } from '../../../../Data/UiKits/Popover';
import { Btn } from '../../../../AbstractElements';
import CommonPopover from '../Common/CommonPopover';

export default function BasicPopover() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);

    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={BasicPopoverTitle} subTitle={basicPopoverSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <Btn color='primary' className="example-popover" id='Popover1' onClick={toggle}>{HurryUp}</Btn>
                    <Popover placement="left" isOpen={popover} target="Popover1" toggle={toggle}>
                        <PopoverHeader>{'Basic Popover'}</PopoverHeader>
                        <PopoverBody>{"If the package restore doesn't help, you can look at the Output window in the Visual Studio."}</PopoverBody>
                    </Popover>
                    {basicPopoverData && basicPopoverData.map((item, index) => (
                        <Fragment key={index}>
                            <CommonPopover data={item} />
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}

