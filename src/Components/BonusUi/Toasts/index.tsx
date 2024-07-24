import React from 'react'
import { Container, Row } from 'reactstrap'
import LiveToast from './LiveToast'
import ColorsScheme from './ColorsScheme'
import StackingToasts from './StackingToasts'
import TranslucentToasts from './TranslucentToasts'
import DefaultToast from './DefaultToast'
import UniqueToast from './UniqueToast'
import ToastPlacement from './ToastPlacement'

export default function ToastsContainer() {
  return (
    <Container fluid>
        <Row>
            <LiveToast/>
            <ColorsScheme/>
            <StackingToasts/>
            <TranslucentToasts/>
            <DefaultToast/>
            <UniqueToast/>
            <ToastPlacement/>
        </Row>
    </Container>
  )
}
