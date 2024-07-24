import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { RevenueSaleCardProps } from '../../../../Types/Dashboard.type'
import { H2 } from '../../../../AbstractElements'

export default function RevenueSaleCard({ data }: RevenueSaleCardProps) {
    return (
        <>
            {data.map((item) => (
                <div className={item.colClass} key={item.id}>
                    <Card className={`title-line widget-1 ${item.cardClass ? item.cardClass : ''}`}>
                        <CardHeader className="card-no-border">
                            <H2>{item.title}</H2>
                            <span className="f-w-500 f-12 f-light mt-0">{item.span}
                                <span className="txt-primary">{item.span2}</span>
                            </span>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <div className={`${item.chartClass}-chart-container`}>
                                <div id={item.chartId}>
                                    <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} width={item.chart.width} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </>
    )
}