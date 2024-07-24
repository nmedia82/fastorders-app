import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignPageData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function SmallPage() {
    return (
        <Pagination listClassName="pagination-info pagin-border-info" size='sm' aria-label="Page navigation example">
            {alignPageData && alignPageData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
