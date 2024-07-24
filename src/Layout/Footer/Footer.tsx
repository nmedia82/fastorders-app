import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { P } from '../../AbstractElements'
import { Globe } from 'react-feather'
import FooterLanguage from './FooterLanguage'

export default function FooterLayout() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className='gy-1'>
                    <Col lg={6} md={7} className="footer-copyright">
                        <P className="mb-0 f-light f-w-500">{'Copyright 2024 © Yuri theme by pixelstrap'}</P>
                    </Col>
                    <Col lg={6} md={5}>
                        <div className="d-flex">
                            <FooterLanguage />
                            <div className="lang-title f-light f-w-500">
                                <Globe className='me-1' />
                                <span>{'Select Region'}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
