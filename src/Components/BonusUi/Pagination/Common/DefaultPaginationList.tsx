import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { defaultPagiData } from '../../../../Data/BonusUi/Pagination'
import { Href } from '../../../../Utils/Constants'
import { DefaultPaginationListProp } from '../../../../Types/BonusUi.type'

export default function DefaultPaginationList({pageClass='', pageColor}: DefaultPaginationListProp) {
    return (
        <Pagination aria-label='Page navigation example' className={pageClass} listClassName={`pagin-border-${pageColor} pagination-${pageColor}`}>
            {defaultPagiData && defaultPagiData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item.text}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
