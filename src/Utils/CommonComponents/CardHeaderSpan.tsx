import React from 'react'
import { CardHeader } from 'reactstrap'
import { CardHeaderSpanType } from '../../Types/CommonComponent.type'
import { H2, H5 } from '../../AbstractElements'

export default function CardHeaderSpan({ headerClass, smallHeading, spanClass, heading, span, span2, headingClass, span2Class }: CardHeaderSpanType) {
    return (
        <CardHeader className={headerClass ? headerClass : ""}>
            {smallHeading ? <H5>{smallHeading}</H5> : <H2 className={headingClass ? headingClass : ""}>{heading}</H2>}
            {span && <span className={spanClass ? spanClass : ''} dangerouslySetInnerHTML={{ __html: span }} />}
            {span2 && <span className={span2Class ? span2Class : ''} dangerouslySetInnerHTML={{ __html: span2 }} />}
        </CardHeader>
    )
}