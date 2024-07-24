import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, RoundedPaginationTitle } from '../../../../Utils/Constants'
import { roundedlistData, roundedPageSubTitle } from '../../../../Data/BonusUi/Pagination'

export default function RoundedPagination() {
    return (
        <Col md={6}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={RoundedPaginationTitle} subTitle={roundedPageSubTitle} />
                <CardBody>
                    <Pagination listClassName="pagination-dark pagin-border-dark gap-2" aria-label="Page navigation example">
                        {roundedlistData && roundedlistData.map((item, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink className='rounded-circle' href={Href}>{item.text}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}
