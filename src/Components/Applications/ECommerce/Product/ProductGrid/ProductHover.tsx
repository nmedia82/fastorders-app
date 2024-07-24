import React from 'react'
import { useDispatch } from 'react-redux';
import { Btn, LI, UL } from '../../../../../AbstractElements';
import { Link } from 'react-router-dom';
import { addCartData } from '../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { ProductDataTypes, ProductHoverProps } from '../../../../../Types/ECommerce.type';

export default function ProductHover({ onClickHandle, item }: ProductHoverProps) {
    const dispatch = useDispatch();
    const addToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="product-hover">
            <UL className="simple-list flex-row">
                <LI>
                    <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`} onClick={() => addToCart(item)}>
                        <i className="icon-shopping-cart" />
                    </Link>
                </LI>
                <LI>
                    <Btn color="transparent" onClick={() => onClickHandle(item)}>
                        <i className="icon-eye" />
                    </Btn>
                </LI>
                <LI>
                    <Btn color="transparent"><i className="icofont icofont-law-alt-2" /></Btn>
                </LI>
            </UL>
        </div>
    )
}

