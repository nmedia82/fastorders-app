import React from 'react'
import { Container, Row } from 'reactstrap'
import GridOptions from './GridOptions'
import GridColumn from './GridColumn'
import VerticalAlignment from './VerticalAlignment'
import HorizontalAlignment from './HorizontalAlignment'
import Nesting from './Nesting'
import Order from './Order'
import OffSet from './OffSet'

export default function GridContainer() {
    return (
        <Container fluid>
            <Row>
                <GridOptions/>
                <GridColumn/>
                <VerticalAlignment/>
                <HorizontalAlignment/>
                <Nesting/>
                <Order/>
                <OffSet/>
            </Row>
        </Container>
    )
}
