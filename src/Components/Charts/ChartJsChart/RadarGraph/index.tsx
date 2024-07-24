import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RadarGraphTitle } from '../../../../Utils/Constants'
import { Radar } from 'react-chartjs-2'
import { radarGraphData, radarOptions } from '../../../../Data/Charts/ChartJsChart'

export default function RadarGraph() {
    return (
        <Col xl={6} md={12} className='box-col-12' >
            <Card className='title-line'>
                <CommonCardHeader title={RadarGraphTitle} />
                <CardBody className='chart-block'>
                    <Radar data={radarGraphData} options={radarOptions} width={724} height={362} />
                </CardBody>
            </Card>
        </Col>
    )
}
