import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import ReactApexChart from 'react-apexcharts'
import { H2, H3 } from '../../../../AbstractElements'
import CommonDropdown from '../../CommonDropdown'
import { widget1CardsData } from '../../../../Data/Dashboard/Project'
import { ProjectWidgetProp } from '../../../../Types/Dashboard.type'
import { dailyDropdownList } from '../../../../Data/Dashboard/Default'

export default function Widget1Cards({ colClass, cardClass }: ProjectWidgetProp) {
    return (
        <>
            {widget1CardsData.map((item) => (
                <Col xl={3} sm={6} key={item.id} className={colClass ? colClass : ''}>
                    <Card className={`project-widget widget-1 title-line ${cardClass ? cardClass : ''} ${item.id === 2 ? 'overflow-hidden' : ''}`}>
                        <CardHeader className="card-no-border pb-0">
                            <div className="header-top">
                                <div>
                                    <H3 className="f-w-600">{item.title}</H3>
                                    <span className="f-12 f-light f-w-500">{item.subTitle}</span>
                                </div>
                                <div className={`card-header-right-icon ${item.id === 1 ? "d-xxl-none" : ""}`}>
                                    <CommonDropdown dropDownClass='icon-dropdown' dropDownIcon end dropDownList={dailyDropdownList} />
                                </div>
                            </div>
                            <div className="widget-middle-content">
                                <div className="d-flex align-items-center">
                                    <H2>{item.price}</H2>
                                    <span className="f-w-500 txt-warning f-12"><TrendingUp className='me-1' /><span>{`+${item.percent}%`}</span></span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <div className={`${item.id === 1 ? 'earning' : 'client'}-chart-container tooltip-small`}>
                                <div id="chart">
                                    <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
