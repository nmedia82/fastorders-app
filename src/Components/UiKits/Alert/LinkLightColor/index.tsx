import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { alertLightColorData, linkLightSubTitle } from '../../../../Data/UiKits/Alert'
import { Href, LinkLightColorTitle } from '../../../../Utils/Constants'
import { Alerts, P } from '../../../../AbstractElements'

export default function LinkLightColor() {
    return (
        <Col xl={12}>
            <Card className='title-line'>
                <CommonCardHeader title={LinkLightColorTitle} subTitle={linkLightSubTitle} />
                <CardBody>
                    <Row>
                        {alertLightColorData && alertLightColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <P className="mb-1">{item.text}</P>
                                        <Alerts color={item.class}>
                                            <P className={`txt-${item.textClass}`}>{'This is a '} <a className={`alert-link txt-${item.textClass}`} href={Href}>
                                                {item.alertText}</a> {' with an example link. Check it out.'}
                                            </P>
                                        </Alerts>
                                    </Fragment>
                                ))}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
