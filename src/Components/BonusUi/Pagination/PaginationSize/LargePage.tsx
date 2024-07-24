import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignPageData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function LargePage() {
    return (
        <Pagination className='m-b-30' listClassName="pagination-info pagin-border-info" size='lg' aria-label="Page navigation example">
            {alignPageData && alignPageData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
