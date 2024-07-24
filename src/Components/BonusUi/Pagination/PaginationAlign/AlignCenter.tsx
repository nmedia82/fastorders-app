import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignCenterData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function AlignCenter() {
    return (
        <Pagination className='m-b-30' listClassName="justify-content-center pagin-border-danger pagination-danger" aria-label="Page navigation example">
            {alignCenterData && alignCenterData.map((item, index) => (
                <PaginationItem key={index} className={index === 2 ? 'active' : ''}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
