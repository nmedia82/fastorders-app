/* eslint-disable jsx-a11y/iframe-has-title */
import { Col, Row } from 'reactstrap'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { SearchResultInitialState } from '../../../../../Types/SearchResult.type'
import { Href } from '../../../../../Utils/Constants'
import PaginationCard from '../Common/PaginationCard'

export default function VideoTab({ allResult }: SearchResultInitialState) {

    return (
        <Row>
            <H6 className="mb-2">{'About 6,000 results (0.60 seconds)'}</H6>
            {allResult &&
                allResult.map((item) => (
                    <Col xxl={6} key={item.id}>
                        <div className="info-block d-flex">
                            <iframe width="200" height="100" src={item.videoLink}></iframe>
                            <div className="flex-grow-1">
                                <a href={Href}>{item.url}</a>
                                <H6>{item.title}</H6>
                                <div className="star-ratings">
                                    <UL className="simple-list flex-row search-info">
                                        <LI>{item.star}</LI>
                                        <LI>{item.vote}</LI>
                                        <LI>{item.news}</LI>
                                    </UL>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
            <PaginationCard />
        </Row>
    )
}

