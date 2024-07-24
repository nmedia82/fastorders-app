import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicTree from './BasicTree'
import DisabledTree from './DisabledTree'

export default function TreeViewContainer() {
  return (
    <Container fluid>
        <Row>
            <BasicTree/>
            <DisabledTree/>
        </Row>
    </Container>
  )
}
