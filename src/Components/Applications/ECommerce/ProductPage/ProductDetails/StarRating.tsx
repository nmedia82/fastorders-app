import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { H6 } from '../../../../../AbstractElements';

export default function StarRating() {
    const [rating, setRating] = useState(1);
    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <Row className='g-2'>
            <Col md={4}>
                <H6 className="product-title">{'Rate Now'}</H6>
            </Col>
            <Col md={8}>
                <div className='d-flex'>
                    <Rating
                        initialValue={rating}
                        size={20}
                        transition
                        fillColor="gold"
                        emptyColor="gray"
                        onClick={handleRatingChange}
                    />
                    <span>{' (250 review)'}</span>
                </div>
            </Col>
        </Row>
    )
}
