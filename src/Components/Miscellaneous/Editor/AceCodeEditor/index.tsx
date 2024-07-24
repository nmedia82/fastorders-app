import React from 'react'
import { Container, Row } from 'reactstrap'
import JavascriptMode from './JavascriptMode'
import HtmlMode from './HtmlMode'
import CssMode from './CssMode'
import PhpMode from './PhpMode'

export default function AceCodeEditorContainer() {
    return (
        <Container fluid>
            <Row>
                <JavascriptMode />
                <HtmlMode/>
                <CssMode/>
                <PhpMode/>
            </Row>
        </Container>
    )
}
