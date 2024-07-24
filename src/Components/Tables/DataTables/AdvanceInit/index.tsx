import React from 'react'
import { Container, Row } from 'reactstrap'
import StockResult from './StockResult'
import RowCreateCallback from './RowCreateCallback'

export default function AdvanceInitContainer() {
    return (
        <Container fluid>
            <Row>
                <StockResult/>
                <RowCreateCallback/>
            </Row>
        </Container>
    )
}
