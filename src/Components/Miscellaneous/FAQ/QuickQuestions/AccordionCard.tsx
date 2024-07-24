import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp, HelpCircle } from 'react-feather';
import { AccordionCardProp } from '../../../../Types/Miscellaneous.type'
import { Btn, H2 } from '../../../../AbstractElements';

export default function AccordionCard({ item }: AccordionCardProp) {
    const [isActivity, setIsActivity] = useState(false);
    const handelChange = () => {
        setIsActivity(!isActivity);
    };
    return (
        <Card>
            <CardHeader>
                <H2 className="mb-0">
                    <Btn color='transparent' className="btn-link collapsed ps-0 justify-content-between" onClick={handelChange}>
                        <span className="d-flex align-items-center gap-2">
                            <HelpCircle />
                            {item.title}
                        </span>
                        {isActivity ? (
                            <ChevronDown className="position-relative inset-0 m-0"/>
                        ) : (
                            <ChevronUp className="position-relative inset-0 m-0"/>
                        )}
                    </Btn>
                </H2>
            </CardHeader>
            <Collapse isOpen={isActivity}>
                <CardBody>{item.paragraph}</CardBody>
            </Collapse>
        </Card>
    )
}
