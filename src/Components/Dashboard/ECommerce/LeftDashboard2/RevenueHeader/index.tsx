import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { H2 } from '../../../../../AbstractElements'
import { RevenueOrder } from '../../../../../Utils/Constants'
import CommonDropdown from '../../../../../Utils/CommonComponents/CommonDropdown'
import { monthlyDropdownList } from '../../../../../Data/Dashboard/Default'
import { revenueHeaderOption } from '../../../../../Data/Dashboard/ECommerce'

export default function RevenueHeader() {
    return (
        <Col xl={9} md={8} className="col-xl-100 order-xl-i">
            <Card className="title-line revenue-header">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{RevenueOrder}</H2>
                        <div className="card-header-right-icon square-legend">
                            <div>
                                <div className="legend-box">
                                    <div className="bg-primary" /><span className="f-light f-12 f-w-500">{'Revenue'}</span>
                                </div>
                                <div className="legend-box">
                                    <div className="bg-success" /><span className="f-light f-12 f-w-500">{'Order'}</span>
                                </div>
                            </div>
                            <CommonDropdown caret dropDownList={monthlyDropdownList} dropDownTitle='Monthly' />
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="revenue-order" id="revenue-order">
                        <ReactApexChart type='line' options={revenueHeaderOption} series={revenueHeaderOption.series} height={225} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
