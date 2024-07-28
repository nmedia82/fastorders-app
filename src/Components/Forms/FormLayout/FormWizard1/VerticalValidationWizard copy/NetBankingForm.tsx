//@ts-nocheck
import React, { useState } from 'react'
import { VerticalWizardFormProps } from '../../../../../Types/Forms.type';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeTerms, NetBanking, SelectYourBank } from '../../../../../Utils/Constants';
import { ChevronDown, ChevronUp } from 'react-feather';
import { H6 } from '../../../../../AbstractElements';
import { netBankingFormBankList } from '../../../../../Data/Forms/FormLayout';

export default function NetBankingForm({ formData, updateFormData }: VerticalWizardFormProps) {
    const [open, setOpen] = useState("");
    const toggle = (id: string) => {
        open === id ? setOpen("") : setOpen(id);
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="mb-3 needs-validation" noValidate>
            <Row className='g-3'>
                <Col md={12}>
                    <Accordion open={open} toggle={toggle} className="dark-accordion">
                        <AccordionItem>
                            <AccordionHeader className='bg-light-primary txt-primary' targetId="1">{NetBanking}
                                {open === "1" ? <ChevronDown className="svg-color"/> : <ChevronUp className="svg-color"/> }
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className="weight-title card-wrapper">
                                <H6 className="sub-title f-14">{SelectYourBank}</H6>
                                <Row className="choose-bank">
                                    {netBankingFormBankList.map((data) => (
                                        <Col sm={6} key={data.id}>
                                            {data.bankList.map((bankNames, number) => (
                                                <FormGroup check key={number} className="radio radio-primary">
                                                    <Input id={bankNames} type="radio" name="bankName" onChange={updateFormData} defaultChecked={bankNames === formData.bankName} value={bankNames} />
                                                    <Label htmlFor={bankNames} check>{bankNames} {number}</Label>
                                                </FormGroup>
                                            ))}
                                        </Col>
                                    ))}
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
                <Col xs={12}>
                    <Input type="textarea" name="feedBack" value={formData.feedBack} onChange={updateFormData} placeholder="Your Feedback" />
                </Col>
                <Col xs={12}>
                    <FormGroup className="mb-0" check>
                        <Input id="invalidCheck67" type="checkbox" required />
                        <Label htmlFor="invalidCheck67" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

