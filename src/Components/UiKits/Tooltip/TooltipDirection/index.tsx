import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { TooltipDirectionTitle, TooltipOn } from '../../../../Utils/Constants';
import { tooltipDirectionSubTitle, tooltipPosition } from '../../../../Data/UiKits/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';

export default function TooltipDirection() {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    return (
        <Col md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={TooltipDirectionTitle} subTitle={tooltipDirectionSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {tooltipPosition && tooltipPosition.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} id={`direction_${index}`} onClick={() => toggleTooltip(index)}>{TooltipOn} {item.position}</Btn>
                                <ToolTip isOpen={openIndex === index} placement={item.position} target={`direction_${index}`} toggle={() => toggleTooltip(index)}>{TooltipOn} {item.position}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
