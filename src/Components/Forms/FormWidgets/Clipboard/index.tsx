import React from 'react'
import { Container, Row } from 'reactstrap'
import ClipboardOnTextInput from './ClipboardOnTextInput'
import ClipboardOnTextArea from './ClipboardOnTextArea'
import ClipboardOnParagraph from './ClipboardOnParagraph'
import CopyPortionFromParagraph from './CopyPortionFromParagraph'

export default function ClipboardContainer() {
    return (
        <Container fluid>
            <Row>
                <ClipboardOnTextInput/>
                <ClipboardOnTextArea/>
                <ClipboardOnParagraph/>
                <CopyPortionFromParagraph/>
            </Row>
        </Container>
    )
}
