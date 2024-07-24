import React from 'react'
import { Container, Row } from 'reactstrap'
import FileSidebar from './FileSidebar'
import FileContent from './FileContent'

export default function FileManagerContainer() {
    return (
        <Container fluid>
            <Row>
                <FileSidebar/>
                <FileContent/>
            </Row>
        </Container>
    )
}
