import React from 'react'
import { Col, Row } from 'reactstrap';
import { GetIconTagType } from '../../../Types/Icons.type';
import { featherIconsData } from '../../../Data/Icons/FeatherIcons';
import { H6 } from '../../../AbstractElements';

export default function FeatherIconsBody({ getIconTag }: GetIconTagType) {
    const featherIcons = require('feather-icons');
    return (
        <Row className='icon-lists feather-icons'>
            {featherIconsData.map((icon, i) => (
                <Col sm={6} md={4} xl={3} key={i} onClick={() => getIconTag(icon)}>
                    <div className='d-flex'>
                        <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon].toSvg(icon) }} />
                        <div className="flex-grow-1 align-self-center">
                            <H6 className='mt-0'>{icon}</H6>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
