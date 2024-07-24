import React from 'react'
import { Container, Row } from 'reactstrap'
import BorderLeft from './BorderLeft'
import BorderRight from './BorderRight'
import BorderTop from './BorderTop'
import BorderBottom from './BorderBottom'
import BorderPrimary from './BorderPrimary'
import BorderWarning from './BorderWarning'
import BorderSecondary from './BorderSecondary'
import AbsoluteSecondary from './AbsoluteSecondary'
import AbsoluteSuccess from './AbsoluteSuccess'

export default function CreativeCardContainer() {
  return (
    <Container fluid>
        <Row>
            <BorderLeft/>
            <BorderRight/>
            <BorderTop/>
            <BorderBottom/>
            <BorderPrimary/>
            <BorderWarning/>
            <BorderSecondary/>
            <AbsoluteSecondary/>
            <AbsoluteSuccess/>
        </Row>
    </Container>
  )
}
