import React from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'
import { H2, Image, P } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { dynamicImage } from '../../../../../Utils'

export default function UpgradeCard() {
    return (
        <Col xl={6} className="box-col-6">
            <Card className="title-line upgrade-card overflow-hidden">
                <Row className="align-items-end">
                    <Col sm={8} xs={11}>
                        <CardHeader>
                            <H2>{'Hi, Welcome back '}<span className="txt-primary">{'Wade! '}</span></H2>
                            <P className="mt-2 f-light">{'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '}</P>
                            <Link className="btn btn-primary btn-hover-effect btn-sm f-w-500" to={`${process.env.PUBLIC_URL}/applications/ecommerce/pricing`}>
                                {'Upgrade Plan'}
                                <SvgIcon iconId='logout' className='svg-sprite ms-1' />
                            </Link>
                        </CardHeader>
                    </Col>
                </Row>
                <div className="cartoon-image">
                    <Image className="img-fluid" src={dynamicImage(`dashboard/welcome.png`)} alt="vector" />
                </div>
                <Image className="img-fluid pattern-image" src={dynamicImage(`dashboard/bg-1.png`)} alt="vector pattern" />
            </Card>
        </Col>
    )
}
