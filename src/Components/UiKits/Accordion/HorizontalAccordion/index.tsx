import React, { useState } from 'react'
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalAccordionTitle, ToggleWidthCollapse } from '../../../../Utils/Constants'
import { horizontalAccordionSubTitle } from '../../../../Data/UiKits/Accordion'
import { Btn } from '../../../../AbstractElements'

export default function HorizontalAccordion() {
    const [open, setOpen] = useState(false)

    return (
        <Col xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={HorizontalAccordionTitle} subTitle={horizontalAccordionSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <Btn color='secondary' onClick={() => setOpen(!open)} >{ToggleWidthCollapse}</Btn>
                    </div>
                    <Row>
                        <Col lg={7} md={8}>
                            <Collapse className={`mt-3 ${open && 'show'}`} horizontal>
                                <Card>
                                    <CardBody className='bg-light-secondary accordion-h-space mb-0 f-light'>
                                        {"The collapse plugin also supports horizontal collapsing.Add the.collapse - horizontal modifier class to transition the width instead of height and set a width on the immediate child element.Feel free to write your own custom Sass, use inline styles, or use our width utilities."}
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
