import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DoughnutChartTitle } from '../../../../Utils/Constants'
import { Doughnut } from 'react-chartjs-2'
import { doughnutData, doughnutOption } from '../../../../Data/Charts/ChartJsChart'

export default function DoughnutChart() {
    return (
        <Col xl={6} md={12} className='box-col-12'>
            <Card className='title-line'>
                <CommonCardHeader title={DoughnutChartTitle} />
                <CardBody className="chart-block chart-vertical-center">
                    <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
