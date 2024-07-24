import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ListWithRadioTitle } from '../../../../Utils/Constants'
import { listRadioData, listWithRadioSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function ListWithRadio() {
    return (
        <Col xl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={ListWithRadioTitle} subTitle={listWithRadioSubTitle} />
                <CardBody>
                    <UL className='list-content'>
                        {listRadioData && listRadioData.map((item, index) => (
                            <LI key={index}>
                                <Input className={`me-2 ${item.class}`} id={`firstRadio${index}`} type="radio" name="listGroupRadio" defaultChecked={item.check ? true: false} />
                                <Label className="mb-0" htmlFor={`firstRadio${index}`} check> {item.text}</Label>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
