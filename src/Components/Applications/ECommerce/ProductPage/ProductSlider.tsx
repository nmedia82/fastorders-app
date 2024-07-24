import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { Image } from '../../../../AbstractElements';
import { fetchProductData } from '../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';
import { AppDispatch, RootState } from '../../../../ReduxToolkit/Store';
import { dynamicImage } from '../../../../Utils';

export default function ProductSlider() {
    const dispatch = useDispatch<AppDispatch>();
    const { productItem } = useSelector((state: RootState) => state.product);
    const [nav1, setNav1] = useState<Slider | null>();
    const [nav2, setNav2] = useState<Slider | null>();
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);
    return (
        <>
            <Slider className='product-slider' arrows={false} asNavFor={nav2!} autoplay={true} autoplaySpeed={3000} ref={(slider1) => setNav1(slider1)}>
                {productItem ? productItem.map((item) =>
                    item.variants.map((items, id) =>
                        <Image src={dynamicImage(items.images)} alt='' className="img-fluid" key={id} />)
                ) : "No product Found "
                }
            </Slider>
            <Slider arrows={false} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} infinite={true}>
                {productItem &&
                    productItem.map((item) => {
                        return item.variants.map((items, id) =>
                            <Image src={dynamicImage(items.images)} alt='' className="img-fluid" key={id} />);
                    })}
            </Slider>
        </>
    )
}

