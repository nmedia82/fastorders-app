//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { ThumbUpDownRate } from '../../../Utils/Constants';
import { thumbUpDownData } from '../../../Data/BonusUi/Rating';

export default function ThumbUpDown() {
    const [thumbs, setThumbs] = useState(4);
    return (
        <Col xxl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={ThumbUpDownRate} subTitle={thumbUpDownData} />
                <CardBody>
                    <div className="rating">
                        <Rating initialRating={thumbs} emptySymbol="text-primary fa fa-thumbs-down fa-2x" fullSymbol="text-primary fa fa-thumbs-up fa-2x" onClick={(rate) => setThumbs(rate)} />
                        <span className="text-primary ms-2 mt-1 current-rating">{thumbs}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
