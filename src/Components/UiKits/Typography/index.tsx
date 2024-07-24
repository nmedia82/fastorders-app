import React from 'react'
import { Container, Row } from 'reactstrap'
import Listing from './Listing'
import Headings from './Headings'
import ColoredHeadings from './ColoredHeadings'
import FontWeight from './FontWeight'
import DisplayHeading from './DisplayHeading'
import InlineTextElements from './InlineTextElements'
import TextColor from './TextColor'
import BlockQuotesCard from './BlockQuotesCard'

export default function TypographyContainer() {
    return (
        <Container fluid>
            <Row>
                <Headings />
                <ColoredHeadings />
                <FontWeight />
                <Listing />
                <DisplayHeading />
                <InlineTextElements />
                <TextColor />
                <BlockQuotesCard />
            </Row>
        </Container>
    )
}
