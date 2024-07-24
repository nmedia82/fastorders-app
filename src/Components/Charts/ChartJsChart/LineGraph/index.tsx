import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { LineGraphTitle } from '../../../../Utils/Constants'
import { Line } from 'react-chartjs-2'
import { lineGraphData, lineGraphOptions } from '../../../../Data/Charts/ChartJsChart'

export default function LineGraph() {
    return (
        <Col xl={6} md={12} className='box-col-12' >
            <Card className='title-line'>
                <CommonCardHeader title={LineGraphTitle} />
                <CardBody className="chart-block">
                    <Line data={lineGraphData} options={lineGraphOptions} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
