import React, { Fragment } from 'react'
import { CardHeader } from 'reactstrap'
import { CommonCardHeaderProps } from '../../Types/CommonComponent.type'
import { H2, P } from '../../AbstractElements'

export default function CommonCardHeader({ headClass, title, subTitle, titleClass }: CommonCardHeaderProps) {
    return (
        <CardHeader className={headClass}>
            <H2 className={`mb-0 ${titleClass ? titleClass : ''}`}>{title}</H2>
            {subTitle && (
                <P className="f-m-light mt-2">
                    {subTitle.map((data, index) => (
                        <Fragment key={index}>
                            {data?.text} {data.code && <code>{data.code}</code>}
                        </Fragment>
                    ))}
                </P>
            )}
        </CardHeader>
    )
}
