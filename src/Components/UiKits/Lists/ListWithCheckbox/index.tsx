import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ListWithCheckboxTitle } from '../../../../Utils/Constants'
import { listCheckboxData, listWithCheckboxSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function ListWithCheckbox() {
    return (
        <Col xl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={ListWithCheckboxTitle} subTitle={listWithCheckboxSubTitle} />
                <CardBody className='dark-list list-checkbox'>
                    <UL className='list-content'>
                        {listCheckboxData && listCheckboxData.map((item, index) => (
                            <LI key={index}>
                                <Input className={`me-2 checkbox-${item.class} ${index === 0 ?'active':''}`} id={item.idFor} type="checkbox" value="" />
                                <Label className={`mb-0 txt-${item.class}`} htmlFor={item.idFor} check>{item.text}</Label>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}

