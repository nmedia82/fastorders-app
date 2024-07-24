//@ts-nocheck
import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OutlineAccordionTitle } from '../../../../Utils/Constants'
import { outlineAccordionSubTitle, outlineData } from '../../../../Data/UiKits/Accordion'
import { ChevronDown, ChevronUp } from 'react-feather'

export default function OutlineAccordion() {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => { open === id ? setOpen('') : setOpen(id) }

    return (
        <Col xl={6} sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={OutlineAccordionTitle} subTitle={outlineAccordionSubTitle} />
                <CardBody>
                    <Accordion open={open} toggle={toggle} className='dark-accordion'>
                        {outlineData && outlineData.map((item, index) => (
                            <AccordionItem className="accordion-wrapper" key={index}>
                                <AccordionHeader className="bg-light-info txt-info" targetId={item.id}>
                                    {item.head}
                                    {open === item.id ? <ChevronUp className='svg-color' /> : <ChevronDown className='svg-color' />}
                                </AccordionHeader>
                                <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Col>
    )
}
