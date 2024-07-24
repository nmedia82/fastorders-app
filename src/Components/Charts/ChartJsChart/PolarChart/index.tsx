import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PolarChartTitle } from '../../../../Utils/Constants'
import { PolarArea } from 'react-chartjs-2'
import { polarData, polarOption } from '../../../../Data/Charts/ChartJsChart'

export default function PolarChart() {
    return (
        <Col xl={6} md={12} className='box-col-12'>
            <Card className='title-line'>
                <CommonCardHeader title={PolarChartTitle} />
                <CardBody className="chart-block chart-vertical-center">
                    <PolarArea data={polarData} options={polarOption} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
