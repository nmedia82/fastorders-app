import React from 'react'
import { Badges, H6, LI } from '../../../../AbstractElements'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { Cart } from '../../../../Utils/Constants'
import CartHeaderList from './CartHeaderList'

export default function CartHeader() {
    return (
        <LI className="cart-nav onhover-dropdown">
            <div className="cart-box onhover-click">
                <SvgIcon iconId='stroke-ecommerce' />
                <Badges color='primary' pill>{'2'}</Badges>
            </div>
            <div className="cart-dropdown onhover-show-div">
                <H6 className="f-18 mb-0 dropdown-title">{Cart}</H6>
                <CartHeaderList />
            </div>
        </LI >
    )
}
