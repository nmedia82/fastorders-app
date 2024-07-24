import React from 'react'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ProfileHeader() {
    return (
        <div className="d-flex align-items-center gap-2 flex-wrap">
            <div className="media-size-email">
                <Image className="img-40 rounded-circle" src={dynamicImage(`user/user.png`)} alt="" />
            </div>
            <div className="flex-grow-1">
                <H6 className='f-w-600'>{'Michael A. Woods'}</H6>
                <P>{'MichaelAWoods@jourrapide.com'}</P>
            </div>
        </div>
    )
}
