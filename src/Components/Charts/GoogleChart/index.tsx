import React from 'react'
import { Container, Row } from 'reactstrap'
import ChartLists from './ChartLists'

export default function GoogleChartContainer() {
    return (
        <Container fluid>
            <Row>
                <ChartLists/>
            </Row>
        </Container>
    )
}
