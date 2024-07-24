import React from 'react'
import { Container, Row } from 'reactstrap'
import CustomScrollbar from './CustomScrollbar'
import SmallSizeScroll from './SmallSizeScroll'
import BadgesScrollbar from './BadgesScrollbar'
import ProfileScrollable from './ProfileScrollable'
import ScrollableContent from './ScrollableContent'
import HorizontalScrollbar from './HorizontalScrollbar'
import BothSideScrollbar from './BothSideScrollbar'

export default function ScrollableContainer() {
  return (
    <Container fluid>
        <Row>
            <CustomScrollbar/>
            <SmallSizeScroll/>
            <BadgesScrollbar/>
            <ProfileScrollable/>
            <ScrollableContent/>
            <HorizontalScrollbar/>
            <BothSideScrollbar/>
        </Row>
    </Container>
  )
}
