import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import ReactApexChart from 'react-apexcharts'
import { H2 } from '../../../../../AbstractElements'
import CommonDropdown from '../../../../../Utils/CommonComponents/CommonDropdown'
import { technologyDropdownList, earningChartOption } from '../../../../../Data/Dashboard/ECommerce'

export default function EarningChart() {
    return (
        <Col xl={12} sm={6}>
            <Card className="height-equal title-line earning-chart-option">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{'$78,098'}
                            <span className="txt-success f-12 f-w-600 ms-2">
                                <TrendingUp className='stroke-success' />{'-29%'}
                            </span>
                            <span className="f-12 f-w-500 f-light d-block">{'Expected Earnings'}</span>
                        </H2>
                        <div className="card-header-right-icon">
                            <CommonDropdown caret start dropDownList={technologyDropdownList} dropDownTitle='Report' />
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <div id="polar-area">
                        <ReactApexChart type='polarArea' options={earningChartOption} series={earningChartOption.series} height={250} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
