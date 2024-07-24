import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultRange from './DefaultRange'
import NagativeRange from './NagativeRange'
import DisabledSlider from './DisabledSlider'
import PointFormatedLabel from './PointFormatedLabel'
import PostfixFormatedLabel from './PostfixFormatedLabel'
import DraggableSlider from './DraggableSlider'

export default function RangeSliderContainer() {
  return (
    <Container fluid>
        <Row>
            <DefaultRange/>
            <NagativeRange/>
            <DisabledSlider/>
            <PointFormatedLabel/>
            <PostfixFormatedLabel/>
            <DraggableSlider/>
        </Row>
    </Container>
  )
}
