//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { RatingBars } from '../../../Utils/Constants';
import { barRatingData } from '../../../Data/BonusUi/Rating';

export default function SimpleRatingBar() {
    const [rating, setRating] = useState(7);

    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={RatingBars} subTitle={barRatingData} />
                <CardBody>
                    <div className="rating">
                        <Rating stop={10} initialRating={rating} emptySymbol="br-selected" fullSymbol="br-selected br-current" onChange={(rate) => setRating(rate)} />
                        <span className="current-rating">{rating}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};