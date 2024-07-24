import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import SearchResultHeader from './SearchResultHeader';
import SearchNav from './SearchNav';
import SearchTabContent from './SearchTabContent';

export default function SearchResultContainer() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <Container className='search-page' fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <SearchResultHeader />
                        <CardBody>
                            <SearchNav activeTab={activeTab} setActiveTab={setActiveTab} />
                            <SearchTabContent activeTab={activeTab} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
