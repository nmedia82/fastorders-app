import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { Card, CardBody, Col } from 'reactstrap';
import { H2, LI, P, UL } from '../../../../../AbstractElements';
import { Dollar } from '../../../../../Utils/Constants';
import { productColorList } from '../../../../../Data/Applications/ECommerce/Product';
import ProductPageWidth from './ProductPageWidth';
import SocialIcons from './SocialIcons';
import StarRating from './StarRating';
import ButtonLinks from './ButtonLinks';

export default function ProductDetails() {
    const productData = useSelector((state: RootState) => state.product.productItem);
    const product = productData[0];
    const products = {
        price: productData[0]?.price,
        discountPrice: productData[0]?.discountPrice,
    };

    return (
        <Col xxl={5} className='box-col-6 order-xxl-0 order-1'>
            <Card>
                <CardBody>
                    <div className='product-page-details'>
                        <H2>{"Women's Jackets"}</H2>
                    </div>
                    <div className='product-price'>
                        {Dollar}{products.price}
                        <del>{Dollar}{products.discountPrice}</del>
                    </div>
                    <UL className='product-color simple-list flex-row'>
                        {productColorList.map((item, index) => (
                            <LI key={index} className={`bg-${item}`} />
                        ))}
                    </UL>
                    <hr />
                    <P>{'Our t-shirts are made from high-quality, breathable materials and are ideal for layering under your favourite coats and cardigans as well as for casual outings and workouts.'}</P>
                    <hr />
                    <ProductPageWidth /><hr />
                    <SocialIcons /><hr />
                    <StarRating /><hr />
                    <ButtonLinks product={product} />
                </CardBody>
            </Card>
        </Col>
    )
}

