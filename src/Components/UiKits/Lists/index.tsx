import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultList from './DefaultList'
import ActiveList from './ActiveList'
import FlushList from './FlushList'
import ContextualClass from './ContextualClass'
import HorizontalList from './HorizontalList'
import CustomList from './CustomList'
import ListWithCheckbox from './ListWithCheckbox'
import ListWithRadio from './ListWithRadio'
import ListWithNumber from './ListWithNumber'
import JsBehavior from './JsBehavior'
import NumberedBadgeList from './NumberedBadgeList'
import DisableList from './DisableList'
import ScrollableList from './ScrollableList'

export default function ListsContainer() {
  return (
    <Container fluid>
        <Row>
            <DefaultList/>
            <ActiveList/>
            <FlushList/>
            <ContextualClass/>
            <HorizontalList/>
            <CustomList/>
            <ListWithCheckbox/>
            <ListWithRadio/>
            <ListWithNumber/>
            <JsBehavior/>
            <NumberedBadgeList/>
            <DisableList/>
            <ScrollableList/>
        </Row>
    </Container>
  )
}
