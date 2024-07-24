//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { HeartRatingBar } from '../../../Utils/Constants';
import { heartRatingData } from '../../../Data/BonusUi/Rating';

export default function HeartRating() {
    const [rating, setRating] = useState(3);

    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={HeartRatingBar} subTitle={heartRatingData} />
                <CardBody>
                    <div className="rating">
                        <Rating initialRating={rating} emptySymbol="text-primary fa fa-heart-o fa-2x" fullSymbol="text-primary fa fa-heart fa-2x" onClick={(rate: number) => setRating(rate)} />
                        <span className="text-primary ms-3 mb-1 current-rating">{rating}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};
