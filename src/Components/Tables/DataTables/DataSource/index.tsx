import React from 'react'
import { Container, Row } from 'reactstrap'
import HtmlSourcedData from './HtmlSourcedData'
import AjaxSourcedData from './AjaxSourcedData'
import JavascriptSourcedData from './JavascriptSourcedData'
import ServerSideProcessing from './ServerSideProcessing'

export default function DataSourceContainer() {
  return (
    <Container fluid>
        <Row>
            <HtmlSourcedData/>
            <AjaxSourcedData/>
            <JavascriptSourcedData/>
            <ServerSideProcessing/>
        </Row>
    </Container>
  )
}
