import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AdditionalAlertTitle } from '../../../../Utils/Constants'
import { additionalAlertData, additionalAlertSubTitle } from '../../../../Data/UiKits/Alert'
import { Alerts, H5, P } from '../../../../AbstractElements'

export default function AdditionalAlert() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={AdditionalAlertTitle} subTitle={additionalAlertSubTitle} />
                <CardBody className='dark-alert'>
                    {additionalAlertData && additionalAlertData.map((item, index) => (
                        <Alerts color={`light-${item.class}`} key={index}>
                            <H5 className={`alert-heading pb-2 txt-${item.class}`} >{item.head}</H5>
                            <P>{item.text}</P>
                            <hr />
                            <P className="mb-0">{item.subtext}</P>
                        </Alerts>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
