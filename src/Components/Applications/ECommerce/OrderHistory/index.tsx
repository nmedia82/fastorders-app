import React from 'react'
import { Container, Row } from 'reactstrap'
import OrderCards from './OrderCards'
import DatatableOrderHistory from './DatatableOrderHistory'

export default function OrderHistoryContainer() {
  return (
    <Container fluid>
      <Row>
          <OrderCards/>
          <DatatableOrderHistory/>
      </Row>
    </Container>
  )
}
