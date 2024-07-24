//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { MovieRatingBar } from '../../../Utils/Constants';
import { movingRatingDta } from '../../../Data/BonusUi/Rating';

export default function MovingRating() {
    const [rating, setRating] = useState(2);
    const [status, setStatus] = useState("Mediocre");

    useEffect(() => {
        switch (rating) {
            case 1:
                setStatus("Bad");
                break;
            case 2:
                setStatus("Mediocre");
                break;
            case 3:
                setStatus("Good");
                break;

            default:
                setStatus("Awesome");
                break;
        }
    }, [rating]);

    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={MovieRatingBar} subTitle={movingRatingDta} />
                <CardBody className="m-2">
                    <div className="rating">
                        <Rating stop={4} initialRating={rating} emptySymbol="br-widget" fullSymbol="br-widget br-current" onChange={(rate: number) => setRating(rate)} />
                        <span className="text-primary current-rating fs-6">{status}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

