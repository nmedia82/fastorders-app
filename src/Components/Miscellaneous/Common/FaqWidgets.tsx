import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { faqWidgetsData } from '../../../Data/Miscellaneous/FAQ'
import { H3, P } from '../../../AbstractElements'

export default function FaqWidgets() {
    return (
        <>
            {faqWidgetsData.map((data) => (
                <Col xl={4} className={data.colClass} key={data.id}>
                    <Card className="bg-primary">
                        <CardBody>
                            <div className="d-flex faq-widgets">
                                <div className="flex-grow-1">
                                    <H3 className="f-w-600 txt-light">{data.title}</H3>
                                    <P>{data.paragraph}</P>
                                </div>
                                {data.icon}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
