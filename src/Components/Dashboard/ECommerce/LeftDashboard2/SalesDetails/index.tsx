import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DropdownWithHeader'
import { SalesOverview } from '../../../../../Utils/Constants'
import { dailyDropdownList } from '../../../../../Data/Dashboard/Default'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { salesDetailsData } from '../../../../../Data/Dashboard/ECommerce'
import { H3 } from '../../../../../AbstractElements'

export default function SalesDetails() {
    return (
        <Col xl={12}>
            <Card className="title-line sales-details">
                <DropdownWithHeader end headerClass='card-no-border sales-bg' heading={SalesOverview} dropDownClass='icon-dropdown'
                    dropDownIcon dropDownList={dailyDropdownList} />
                <CardBody className="pt-0 custom-scrollbar">
                    <Row className="row-cols-4 row-cols-xl-iii row-cols-md-iii">
                        {salesDetailsData.map((item) => (
                            <Col key={item.id} className={item.id === 4 ? 'sales-transaction' : ''}>
                                <div className="sales-overview widget-1">
                                    <div className="common-box">
                                        <div className={`rounded-circle2 ${item.color}`}>
                                            <div className="sales-icon">
                                                <SvgIcon className={item.icon === 'orders' ? 'fill-primary' : ''} iconId={item.icon} />
                                            </div>
                                        </div>
                                        <div>
                                            <H3 className="f-w-600">{item.title}</H3>
                                            <div className="sale-content">
                                                <span className="f-w-500 f-light f-12">{item.subTitle}</span>
                                                <div className="d-flex align-items-center gap-1">
                                                    <TrendingUp className={`stroke-${item.color} ${item.id === 4 ? 'reverse-icon' : ''}`} />
                                                    <span className={`txt-${item.color} f-w-600 f-12`}>{'+'}{item.rate}{'%'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
