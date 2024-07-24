import React from 'react'
import { Container, Row } from 'reactstrap'
import TooltipFormValidation from './TooltipFormValidation'
import BrowserDefaults from './BrowserDefaults'
import ValidationForm from './ValidationForm'

export default function FormValidationContainer() {
  return (
    <Container fluid>
        <Row>
            <TooltipFormValidation/>
            <BrowserDefaults/>
            <ValidationForm/>
        </Row>
    </Container>
  )
}
