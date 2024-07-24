import React, { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonWithEvent, CollapesAccordionTitle, LinkWithHref } from '../../../../Utils/Constants'
import { collapesAccordionSubTitle } from '../../../../Data/UiKits/Accordion'
import { Btn, P } from '../../../../AbstractElements'

export default function CollapesAccordion() {
    const [open, setOpen] = useState(false)

    return (
        <Col xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={CollapesAccordionTitle} subTitle={collapesAccordionSubTitle} />
                <CardBody className="collapse-accordion">
                    <P className='common-flex'>
                        <Btn color="dark" onClick={() => setOpen(!open)} >{LinkWithHref}</Btn>
                        <Btn color='dark' onClick={() => setOpen(!open)} >{ButtonWithEvent}</Btn>
                    </P>
                    <Collapse className={`btn-dark ${open ? 'show' : ''} mt-3`}>
                        <Card>
                            <CardBody className="mb-0 dark-accordion txt-light bg-dark rounded-3">
                                {"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}
                            </CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}

