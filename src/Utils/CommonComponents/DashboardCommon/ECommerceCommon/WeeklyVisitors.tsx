import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { TrendingDown, TrendingUp } from 'react-feather'
import ReactApexChart from 'react-apexcharts'
import { WeeklyVisitorTitle } from '../../../Constants'
import CommonDropdown from '../../CommonDropdown'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { H2, H3 } from '../../../../AbstractElements'
import { squareLegendData, weeklyVisitorOption } from '../../../../Data/Dashboard/ECommerce'
import { WeeklyVisitorsProps } from '../../../../Types/Dashboard.type'

export default function WeeklyVisitors({ averageData, colClass, cardClass, bodyClass, chartColClass, avgColClass }: WeeklyVisitorsProps) {
    return (
        <Col xs={12} className={colClass ? colClass : ''}>
            <Card className={`visitor-customer title-line ${cardClass ? cardClass : ''}`}>
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{WeeklyVisitorTitle}</H2>
                        <div className="card-header-right-icon square-legend">
                            <div>
                                {squareLegendData.map((item, index) => (
                                    <div className="legend-box" key={index}>
                                        <div className={`bg-${index === 0 ? 'primary' : 'success'}`} />
                                        <span className="f-light f-12 f-w-500">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <CommonDropdown dropDownList={monthlyDropdownList} dropDownTitle='Report' end caret />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className={bodyClass ? bodyClass : ''}>
                    <Row>
                        <Col xl={7} className={chartColClass}>
                            <div className="weekly-visitor" id="weekly-visitor">
                                <ReactApexChart type='line' options={weeklyVisitorOption} series={weeklyVisitorOption.series} height={110} />
                            </div>
                        </Col>
                        <Col xl={5} className={`d-xl-none1 ${avgColClass}`}>
                            <div className="average-Visitors">
                                {averageData.map((item) => (
                                    <div key={item.id}>
                                        <span className="f-12 f-light f-w-500">{item.text}</span>
                                        <div className="order-content">
                                            {item.visitors ? <H3 className="f-w-600">{item.visitors}</H3> : ''}
                                            <div>
                                                <span className={`txt-${item.color} f-12 f-w-600`}>
                                                    {item.id === 1 ? (<TrendingUp className={`stroke-${item.color}`} />) : (<TrendingDown className={`stroke-${item.color}`} />)}
                                                    {'-'}{item.rate}{'%'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}