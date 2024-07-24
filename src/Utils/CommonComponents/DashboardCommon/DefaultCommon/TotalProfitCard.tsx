import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../DropdownWithHeader'
import { TotalProfitTitle } from '../../../Constants'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { H2 } from '../../../../AbstractElements'
import { TotalProfitCardProps } from '../../../../Types/Dashboard.type'

export default function TotalProfitCard({ colClass, cardClass, height, options }: TotalProfitCardProps) {
    return (
        <Col md={6} className={colClass}>
            <Card className={`title-line ${cardClass ? cardClass : ''}`}>
                <DropdownWithHeader end caret headerClass='card-no-border' heading={TotalProfitTitle} span='Special Discount' spanClass='f-light f-12 d-block f-w-500'
                    span2='60% OFF' span2Class='txt-primary' dropDownList={monthlyDropdownList} dropDownTitle='Weekly' />
                <CardBody className="pt-0">
                    <div className="profit-data">
                        <H2>{'$15,087'}
                            <span className="f-light f-w-500 f-12">
                                {'(Another '}<span className="txt-primary me-1">{'$35,098 '} </span>{'to Goal)'}
                            </span>
                        </H2>
                    </div>
                    <div className="profit-chart-container">
                        <div id="profit_chart">
                            <ReactApexChart type='line' options={options} series={options.series} height={height} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}