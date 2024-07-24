import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { addCartData, fetchProductData } from '../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { AppDispatch, RootState } from '../../../../ReduxToolkit/Store';
import { ProductDataTypes } from '../../../../Types/ECommerce.type';
import { dynamicImage } from '../../../../Utils';
import { Dollar, Href } from '../../../../Utils/Constants';

export default function WishlistCards() {
    const navigate = useNavigate();
    const productItem = useSelector((state: RootState) => state.product.productItem);
    const dispatch = useDispatch<AppDispatch>();
    const moveToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
        navigate(`${process.env.PUBLIC_URL}/applications/ecommerce/cart`);
    };
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    return (
        <Row className='g-sm-4 g-3'>
            {productItem.map((item) => (
                <Col xl={4} md={6} key={item.id}>
                    <div className="prooduct-details-box">
                        <div className="d-flex">
                            <Image className="align-self-center img-fluid img-60" src={dynamicImage(item.image)} alt="#" />
                            <div className="flex-grow-1 ms-3">
                                <div className="product-name">
                                    <H6><a href={Href}>{item.name}</a></H6>
                                </div>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    {'Price'}
                                    <span>: {Dollar}{item.price}</span>
                                </div>
                                <div className="avaiabilty">
                                    <div className="txt-success f-w-600">{item.stock}</div>
                                </div>
                                <Btn color="primary" size="xs" onClick={() => moveToCart(item)}>
                                    {'Move to Cart'}
                                </Btn>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
