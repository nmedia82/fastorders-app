import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultBreadcrumb from './DefaultBreadcrumb'
import DividerBreadcrumb from './DividerBreadcrumb'
import WithIconBreadcrumb from './WithIconBreadcrumb'
import VariationBreadcrumb from './VariationBreadcrumb'
import ColoredBreadcrumb from './ColoredBreadcrumb'

export default function BreadcrumbContainer() {
  return (
    <Container fluid>
        <Row>
            <DefaultBreadcrumb/>
            <DividerBreadcrumb/>
            <WithIconBreadcrumb/>
            <VariationBreadcrumb/>
            <ColoredBreadcrumb/>
        </Row>
    </Container>
  )
}
