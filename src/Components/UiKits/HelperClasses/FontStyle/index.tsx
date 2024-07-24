import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FontStyleTitle } from '../../../../Utils/Constants'
import { fontStyleData, fontStyleSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { P } from '../../../../AbstractElements'

export default function FontStyle() {
    return (
        <Col xl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={FontStyleTitle} subTitle={fontStyleSubTitle} />
                <CardBody>
                    {fontStyleData && fontStyleData.map((item, index) => (
                        <P className={`f-s-${item}`} key={index}>
                            {'This is a '} <strong>{`.f-s-${item}`}</strong> {'font-style'}
                        </P>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
