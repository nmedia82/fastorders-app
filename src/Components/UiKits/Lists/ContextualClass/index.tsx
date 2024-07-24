import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ContextualClassTitle } from '../../../../Utils/Constants'
import { contextualClassSubTitle, contextualListData } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function ContextualClass() {
    return (
        <Col xxl={6} sm={12} className='box-col-12'>
            <Card className="height-equal title-line context-list">
                <CommonCardHeader title={ContextualClassTitle} subTitle={contextualClassSubTitle} />
                <CardBody>
                    <UL className='list-content'>
                        {contextualListData && contextualListData.map((item, index) => (
                            <LI className={`list-group-item-action ${item.class}`} key={index}>
                                {item.htmlText}
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}

