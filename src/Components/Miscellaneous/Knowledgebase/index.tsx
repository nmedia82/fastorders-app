import React from 'react'
import { Container, Row } from 'reactstrap'
import KnowledgeSearch from './KnowledgeSearch'
import FaqWidgets from '../Common/FaqWidgets'
import BrowseArticles from './BrowseArticles'
import FeaturedTutorials from '../Common/FeaturedTutorials'
import LatestArticlesVideos from '../Common/LatestArticlesVideos'
import { latestArticlesVideosknowledge } from '../../../Data/Miscellaneous/FAQ'

export default function KnowledgebaseContainer() {
    return (
        <Container fluid>
            <Row>
                <KnowledgeSearch />
                <FaqWidgets />
                <BrowseArticles />
                <FeaturedTutorials />
                <LatestArticlesVideos titleClass='f-w-600' divClass='articles-icons' data={latestArticlesVideosknowledge} />
            </Row>
        </Container>
    )
}
