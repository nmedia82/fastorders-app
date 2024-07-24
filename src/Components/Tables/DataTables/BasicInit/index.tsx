import React from 'react'
import { Container, Row } from 'reactstrap'
import ZeroConfigurationTable from './ZeroConfigurationTable'
import StateSavingTable from './StateSavingTable'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight'

export default function BasicInitContainer() {
    return (
        <Container fluid>
            <Row>
                <ZeroConfigurationTable/>
                <StateSavingTable/>
                <ScrollVerticalDynamicHeight/>
            </Row>
        </Container>
    )
}
