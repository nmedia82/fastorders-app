import React from 'react'
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap'
import { HelpCircle, Search } from 'react-feather'
import { H2 } from '../../../../AbstractElements'
import { SearchArticlesTitle } from '../../../../Utils/Constants'

export default function SearchArticle() {
    return (
        <Col lg={12}>
            <Card className="card-mb-faq xs-mt-search">
                <CardHeader className="faq-header pb-0">
                    <H2>{SearchArticlesTitle}</H2>
                    <HelpCircle />
                </CardHeader>
                <CardBody className="faq-body">
                    <div className="faq-form">
                        <Input type="text" placeholder="Search.." />
                        <Search className="search-icon" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
