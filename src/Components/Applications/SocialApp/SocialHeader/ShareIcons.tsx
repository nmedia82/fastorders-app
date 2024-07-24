import React from 'react'
import { LI, UL } from '../../../../AbstractElements'
import { Href } from '../../../../Utils/Constants'

export default function ShareIcons() {
    return (
        <UL className="share-icons simple-list flex-row">
            <LI>
                <a className="social-icon bg-primary" href={Href}>
                    <i className="fa fa-smile-o"></i>
                </a>
            </LI>
            <LI>
                <a className="social-icon bg-secondary" href={Href}>
                    <i className="fa fa-wechat"></i>
                </a>
            </LI>
            <LI>
                <a className="social-icon bg-warning" href={Href}>
                    <i className="fa fa-share-alt"></i>
                </a>
            </LI>
        </UL>
    )
}
