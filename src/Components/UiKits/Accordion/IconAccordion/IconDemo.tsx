//@ts-nocheck
import React, { useState } from 'react'
import { iconDemoData } from '../../../../Data/UiKits/Accordion';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function IconDemo() {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => id !== open ? setOpen(id) : setOpen('');

    return (
        <Accordion className="dark-accordion" open={open} toggle={toggle}>
            {iconDemoData && iconDemoData.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader className="gap-2 bg-light-success txt-success" targetId={item.id}>
                        {item.icon} {item.head}
                        {open === item.id ? <ChevronUp className='svg-color' /> : <ChevronDown className='svg-color' />}
                    </AccordionHeader>
                    <AccordionBody accordionId={item.id}>
                        {item.text}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
