import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { chartWidgetTopData } from '../../../../Data/Widgets/Chart'
import { H2, H5 } from '../../../../AbstractElements'

export default function ChartWidgetTop() {
    return (
        <Row>
            {chartWidgetTopData.map((item) => (
                <Col xl={4} md={12} className="box-col-12" key={item.id}>
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <CardBody className='row pb-0 m-0'>
                                    <Col xl={9} lg={8} xs={9} className="p-0">
                                        <H5 className="mb-2">{item.title}</H5>
                                        <H2>{item.rate}</H2>
                                        <span>{'Compare to last month'}</span>
                                    </Col>
                                    <Col xl={3} lg={4} xs={3} className="text-end p-0">
                                        <H5 className="txt-success">{'+65%'}</H5>
                                    </Col>
                            </CardBody>
                            <div id={`chart-widget${item.id}`}>
                                <div className={item.id !== 1 ? 'flot-chart-placeholder' : ''} id={item.id !== 1 ? `chart-widget-top-${item.id === 2 ? 'second' : 'third'}` : ''}>
                                    <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
