import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ListWithNumberTitle } from '../../../../Utils/Constants'
import { listWithNumberSubTitle, numberListData } from '../../../../Data/UiKits/Lists'
import { LI, OL } from '../../../../AbstractElements'

export default function ListWithNumber() {
    return (
        <Col xl={4} xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={ListWithNumberTitle} subTitle={listWithNumberSubTitle} />
                <CardBody>
                    <OL className="list-group list-group-numbered list-content">
                        {numberListData && numberListData.map((item, index) => (
                            <LI className={`fw-bold ${item.class}`} key={index}>
                                {item.text}
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}
