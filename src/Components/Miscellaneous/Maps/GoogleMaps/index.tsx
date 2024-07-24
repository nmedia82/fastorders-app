import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicMap from './BasicMap'
import MarkerMaps from './MarkerMaps'
import PolygonsMap from './PolygonsMap'
import PolylineMaps from './PolylineMaps'

export default function GoogleMapsContainer() {
    return (
        <Container fluid>
            <Row>
                <BasicMap />
                <MarkerMaps/>
                <PolygonsMap/>
                <PolylineMaps/>
            </Row>
        </Container>
    )
}
