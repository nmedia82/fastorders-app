import React from 'react'
import { Container, Row } from 'reactstrap'
import WorldMap from './WorldMap'
import UsaMap from './UsaMap'
import IndiaMap from './IndiaMap'
import AustraliaMap from './AustraliaMap'

export default function LeafletMapsContainer() {
    return (
        <Container fluid>
            <Row>
                <WorldMap/>
                <UsaMap/>
                <IndiaMap/>
                <AustraliaMap/>
            </Row>
        </Container>
    )
}
