import React from 'react'
import { Container, Row } from 'reactstrap'
import BlogBoxShadow from './BlogBoxShadow'
import BlogBoxList from './BlogBoxList'
import BlogBoxGrid from './BlogBoxGrid'

export default function BlogDetailsContainer() {
    return (
        <Container fluid>
            <Row>
                <BlogBoxShadow />
                <BlogBoxList />
                <BlogBoxGrid />
            </Row>
        </Container>
    )
}
