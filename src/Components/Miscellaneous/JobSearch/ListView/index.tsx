import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import RightSidebarCards from '../Common/RightSidebarCards'

export default function ListViewContainer() {
    return (
        <Container fluid>
            <Row>
                <LeftSidebar />
                <Col xl={9} className='xl-60 box-col-12'>
                    <RightSidebarCards limit={8} />
                </Col>
            </Row>
        </Container>
    )
}
