import React from 'react'
import { Link } from 'react-router-dom'
import { ProductDetailsProps } from '../../../../../Types/ECommerce.type'
import { H3, P } from '../../../../../AbstractElements'
import { Dollar } from '../../../../../Utils/Constants'

export default function ProductDetails({ item }: ProductDetailsProps) {
    return (
        <div className="product-details">
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product_page/${item.id}`}>
                <H3>{item.name}</H3>
            </Link>
            <P>{item.note}</P>
            <div className="product-price">
                {Dollar} {item.price}
                <del>
                    {Dollar} {item.discountPrice}
                </del>
            </div>
        </div>
    )
}

