import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, LinkColorTitle } from '../../../../Utils/Constants'
import { alertColorData, linkColorSubTitle } from '../../../../Data/UiKits/Alert'
import { Alerts, P } from '../../../../AbstractElements'

export default function LinkDarkColor() {
    return (
        <Col xl={12}>
            <Card className='title-line'>
                <CommonCardHeader title={LinkColorTitle} subTitle={linkColorSubTitle} />
                <CardBody>
                    <Row>
                        {alertColorData && alertColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <P className="mb-1">{item.text}</P>
                                        <Alerts color={item.class} className='dark'>
                                            <P>{'This is a '} <a className={`alert-link ${item.class !== 'light' ? 'text-white' : ''}`} href={Href}>
                                                {item.alertText}</a> {'with an example link.Check it out.'}
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
