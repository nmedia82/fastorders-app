import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultPagination from './DefaultPagination'
import ActiveDisablePage from './ActiveDisablePage'
import IconPagination from './IconPagination'
import RoundedPagination from './RoundedPagination'
import PaginationAlign from './PaginationAlign'
import PaginationSize from './PaginationSize'

export default function PaginationContainer() {
  return (
    <Container fluid>
        <Row>
            <DefaultPagination/>
            <ActiveDisablePage/>
            <IconPagination/>
            <RoundedPagination/>
            <PaginationAlign/>
            <PaginationSize/>
        </Row>
    </Container>
  )
}
