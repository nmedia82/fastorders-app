import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ProductDataTypes } from '../../../../../Types/ECommerce.type';
import { addCartData } from '../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { Btn } from '../../../../../AbstractElements';

export default function ButtonLinks({ product }: { product: ProductDataTypes }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="m-t-15 common-flex">
            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`} onClick={addToCart}>
                <Btn color="primary">
                    <i className="fa fa-shopping-basket me-1"></i> {'Add To Cart'}
                </Btn>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/checkout`}>
                <Btn color="success">
                    <i className="fa fa-shopping-cart me-1"></i> {'Buy Now'}
                </Btn>
            </Link>
            <Btn color="warning" onClick={() => navigate(`/applications/ecommerce/wishlist`)}>
                <i className="fa fa-heart me-1"></i> {'Add To WishList'}
            </Btn>
        </div>
    )
}

