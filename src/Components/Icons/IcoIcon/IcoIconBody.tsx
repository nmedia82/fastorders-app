import React from 'react'
import { IconsBodyProps } from '../../../Types/Icons.type';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';

export default function IcoIconBody({ title, iconType, parentCallback }: IconsBodyProps) {
    const getIconTag = (tag: string) => {
        parentCallback(tag);
    };
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={title} />
                <CardBody>
                    <Row className='icon-lists'>
                        {iconType.map((icon, i) => (
                            <Col sm={6} md={4} xl={3} key={i} onClick={() => getIconTag(icon)}>
                                <i className={`icofont icofont-${icon}`}></i>
                                {icon}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
