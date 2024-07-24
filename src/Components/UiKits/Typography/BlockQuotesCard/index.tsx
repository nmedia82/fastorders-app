import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BlockQuotes, P } from '../../../../AbstractElements'
import { BlockquotesTitle } from '../../../../Utils/Constants'
import { blockQuotesData, blockQuotesSubTitle } from '../../../../Data/UiKits/Typography'

export default function BlockQuotesCard() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden title-line'>
                <CommonCardHeader title={BlockquotesTitle} subTitle={blockQuotesSubTitle} />
                <CardBody>
                    {blockQuotesData && blockQuotesData.map((item, index) => (
                        <div key={index} className={`figure d-block dark-blockquote ${item.class?item.class:''}`}>
                            <BlockQuotes className={`blockquote light-card bg-light-${item.color}`}>
                                <P className="mb-0 txt-dark">{item.text}</P>
                                <span className="blockquote-footer pt-3">{item.footer}</span>
                            </BlockQuotes>
                        </div>
                    ))}
                </CardBody>
            </Card >
        </Col >
    )
}
