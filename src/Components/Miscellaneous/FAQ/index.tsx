import React from 'react'
import { Container, Row } from 'reactstrap'
import FaqWidgets from '../Common/FaqWidgets'
import QuickQuestions from './QuickQuestions'
import FeaturedTutorials from '../Common/FeaturedTutorials'
import LatestArticlesVideos from '../Common/LatestArticlesVideos'
import { latestArticlesVideosFaq } from '../../../Data/Miscellaneous/FAQ'

export default function FaqContainer() {
    return (
        <Container fluid>
            <div className="faq-wrap">
                <Row>
                    <FaqWidgets/>
                    <QuickQuestions/>
                    <FeaturedTutorials/>
                    <LatestArticlesVideos rowClass='faq-wrapper' data={latestArticlesVideosFaq}/>
                </Row>
            </div>
        </Container>
    )
}
