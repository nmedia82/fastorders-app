import React from 'react'
import { Link } from 'react-router-dom'
import { H5, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { OrderConfirmed } from '../../../../../Utils/Constants'

export default function FinishForm() {
    return (
        <div className="order-confirm">
            <Image src={dynamicImage(`gif/successful.gif`)} alt="popper" />
            <H5>{OrderConfirmed}</H5>
            <P className="mb-0">{"An email with your orders specifics will be sent to you as order confirmation."}</P>
            <P className="text-center f-w-500 mt-2">
                {'Order ID: '}
                <Link className="text-decoration-underline" to={`${process.env.PUBLIC_URL}/applications/ecommerce/order-history`}>
                    {'HR56238'}
                </Link>
            </P>
        </div>
    )
}

