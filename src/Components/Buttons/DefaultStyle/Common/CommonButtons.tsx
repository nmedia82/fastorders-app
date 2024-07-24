import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { CommonButtonsProps } from '../../../../Types/Buttons.type'

export default function CommonButtons({ title, md, xs, subTitle, bodyClass, commonButtonsData }: CommonButtonsProps) {
    return (
        <Col md={md} xs={xs}>
            <Card className='title-line'>
                <CommonCardHeader title={title} subTitle={subTitle} />
                <CardBody className={`common-flex ${bodyClass ? bodyClass : ''}`}>
                    {commonButtonsData.map((data, index) => (
                        <Btn key={index} className={data.btnClass}
                            outline={data.outline} disabled={data.disabled}
                            size={data.size} id={data.id} color={data.color}>
                            {data.title}
                        </Btn>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
