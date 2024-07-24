import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { LineChartTitle } from '../../../../Utils/Constants'
import { Line } from 'react-chartjs-2'
import { lineChartData, lineChartOption } from '../../../../Data/Charts/ChartJsChart'

export default function LineChart() {
    return (
        <Col xl={6} md={12} className='box-col-12'>
            <Card className='title-line'>
                <CommonCardHeader title={LineChartTitle} />
                <CardBody className='chart-block'>
                    <Line data={lineChartData} options={lineChartOption} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
