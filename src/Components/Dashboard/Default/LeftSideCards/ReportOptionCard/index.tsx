import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DropdownWithHeader'
import { monthlyDropdownList } from '../../../../../Data/Dashboard/Default'
import { TopReferralsPages } from '../../../../../Utils/Constants'
import { Badges, H2, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import ReferralProgress from './ReferralProgress'
import ReferralList from './ReferralList'

export default function ReportOptionCard() {
    return (
        <Col xl={6} md={6} className="order-md-ii">
            <Card className="title-line">
                <DropdownWithHeader end caret dropDownList={monthlyDropdownList} headerClass='card-no-border report-option' heading={TopReferralsPages}
                    span='Up to $100 per referral' spanClass='f-light f-12 d-block f-w-500' dropDownTitle='Generate Report' />
                <CardBody className="pt-0">
                    <div className="referral-content">
                        <div className="referral-left-details">
                            <div className="d-flex gap-1">
                                <H2>{'129,900'}</H2>
                                <Badges color='light-warning' className='txt-warning'>
                                    <TrendingUp className='me-1' />{'4.5%'}
                                </Badges>
                            </div>
                            <span className="f-light f-12 f-w-500">{'vs. previous month'}</span>
                        </div>
                        <div className="referral-image"><Image src={dynamicImage(`dashboard/1.png`)} alt="vector" /></div>
                    </div>
                    <ReferralProgress />
                    <ReferralList/>
                </CardBody>
            </Card>
        </Col>
    )
}
