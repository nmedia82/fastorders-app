import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicTimeline from './BasicTimeline'
import HoverTimeline from './HoverTimeline'
import VariationTimeline from './VariationTimeline'
import HorizontalTimeline from './HorizontalTimeline'
import TimelineMain from './TimelineMain'

export default function TimelineContainer() {
  return (
    <Container fluid>
        <Row>
            <BasicTimeline/>
            <HoverTimeline/>
            <VariationTimeline/>
            <HorizontalTimeline/>
            <TimelineMain/>
        </Row>
    </Container>
  )
}
