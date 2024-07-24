//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { StarRatingBar } from '../../../Utils/Constants';
import { starRatingData } from '../../../Data/BonusUi/Rating';

export default function StarRating() {
    const [rating, setRating] = useState(1);

    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={StarRatingBar} subTitle={starRatingData} />
                <CardBody>
                    <div className="rating">
                        <Rating initialRating={rating} emptySymbol="text-primary star fa fa-star-o fa-2x" fullSymbol="text-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
