import React from 'react'
import { Container, Row } from 'reactstrap'
import StandardEditor from './StandardEditor'
import SnowTheme from './SnowTheme'
import BubbleTheme from './BubbleTheme'

export default function QuillEditorContainer() {
    return (
        <Container fluid>
            <Row>
                <StandardEditor/>
                <SnowTheme/>
                <BubbleTheme/>
            </Row>
        </Container>
    )
}
