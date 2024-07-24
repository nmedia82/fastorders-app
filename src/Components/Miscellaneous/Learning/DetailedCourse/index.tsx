import React from 'react'
import { Container, Row } from 'reactstrap'
import LearningFilter from '../Common/LearningFilter'
import BlogDetails from './BlogDetails'

export default function DetailedCourseContainer() {
    return (
        <Container fluid>
            <Row>
                <BlogDetails />
                <LearningFilter />
            </Row>
        </Container>
    )
}
