import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { HtmlTooltipTitle } from '../../../../Utils/Constants';
import { htmlTooltipData, htmlTooltipSubTitle } from '../../../../Data/UiKits/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';

export default function HtmlTooltip() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Col md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={HtmlTooltipTitle} subTitle={htmlTooltipSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {htmlTooltipData && htmlTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} id={`html_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`html_${index}`} toggle={() => toggleTooltip(index)}>{item.tooltip}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
