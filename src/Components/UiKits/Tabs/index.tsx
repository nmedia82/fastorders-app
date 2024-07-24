import React from 'react'
import { Container, Row } from 'reactstrap'
import SimpleTab from './SimpleTab'
import IconTabs from './IconTabs'
import VerticalTab from './VerticalTab'
import PillsTab from './PillsTab'
import JustifyTab from './JustifyTab'
import MaterialLeftStyleTab from './MaterialLeftStyleTab'
import MaterialStyleTab from './MaterialStyleTab'
import BorderTabs from './BorderTabs'

export default function TabsContainer() {
  return (
    <Container fluid>
        <Row>
            <SimpleTab/>
            <IconTabs/>
            <VerticalTab/>
            <PillsTab/>
            <JustifyTab/>
            <MaterialLeftStyleTab/>
            <MaterialStyleTab/>
            <BorderTabs/>
        </Row>
    </Container>
  )
}
