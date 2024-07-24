import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignbottomData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'

export default function AlignBottom() {
    return (
        <Pagination listClassName="justify-content-end pagin-border-success pagination-success" aria-label="Page navigation example">
            {alignbottomData && alignbottomData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
