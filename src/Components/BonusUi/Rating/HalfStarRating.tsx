//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { HalfStarRatingBar } from '../../../Utils/Constants';
import { halfStarRatingData } from '../../../Data/BonusUi/Rating';

export default function HalfStarRating() {
    const [rating, setRating] = useState(1.5);

    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={HalfStarRatingBar} subTitle={halfStarRatingData} />
                <CardBody>
                    <div className="rating">
                        <Rating initialRating={rating} fractions={2} emptySymbol="text-primary star fa fa-star-o fa-2x" fullSymbol="text-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
                        <span className="text-primary current-rating">{rating}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
