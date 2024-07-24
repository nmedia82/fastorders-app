import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { P } from '../../../../AbstractElements'
import { TextColorTitle } from '../../../../Utils/Constants'
import { textColorData, textColorSubTitle } from '../../../../Data/UiKits/Typography'

export default function TextColor() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={TextColorTitle} subTitle={textColorSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        {textColorData && textColorData.map((item, index) => (
                            <P key={index} className={`mb-0 txt-${item.class}`}> {item.text} <code>{`.txt-${item.class}`}</code> {'class'}</P>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
