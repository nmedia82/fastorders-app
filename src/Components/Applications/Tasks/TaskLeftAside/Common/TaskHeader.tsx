import React from 'react'
import { H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function TaskHeader() {
    return (
        <div className="common-flex align-items-center">
            <div className="media-size-email">
                <Image className="rounded-circle" src={dynamicImage(`user/user.png`)} alt="" />
            </div>
            <div className="flex-grow-1">
                <H6 className="f-w-600">{'MARK JENCO'}</H6>
                <P>{'Markjecno@gmail.com'}</P>
            </div>
        </div>
    )
}
