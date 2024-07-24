import React from 'react'
import { Btn, P } from '../../../../../../AbstractElements'
import { SideHeaderProp } from '../../../../../../Types/Chat.type'

export default function SideHeader({ title }: SideHeaderProp) {
    return (
        <div className="common-space">
            <P>{title}</P>
            <div className="header-top">
                <Btn color="transparent" className="badge-light-primary f-w-500">
                    <i className="fa fa-plus"></i>
                </Btn>
            </div>
        </div>
    )
}