import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import LearningFilter from '../Common/LearningFilter'
import BlogBoxList from './BlogBoxList'
import BlogBoxGrid from './BlogBoxGrid'

export default function LearningListContainer() {
    return (
        <Container fluid>
            <Row>
                <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12">
                    <Row>
                        <BlogBoxList />
                        <BlogBoxGrid />
                    </Row>
                </Col>
                <LearningFilter />
            </Row>
        </Container>
    )
}
