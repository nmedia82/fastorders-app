import React from 'react'
import { Container } from 'reactstrap'
import LeftSideRibbons from './LeftSideRibbons'
import RightSideRibbon from './RightSideRibbon'

export default function RibbonsContainer() {
  return (
    <Container fluid>
        <LeftSideRibbons/>
        <RightSideRibbon/>
    </Container>
  )
}
