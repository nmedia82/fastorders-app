import React from 'react'
import { Col, Row } from 'reactstrap'
import { AbbreviationIconType } from '../../../Types/Icons.type'
import { H5, H6 } from '../../../AbstractElements'
import { flagIconData } from '../../../Data/Icons/FlagIcons'

export default function FlagIconBody({ getIconTag }: AbbreviationIconType) {
    return (
        <Row className='icon-lists flag-icons'>
            {flagIconData.map((icon, i) => (
                <Col xxl={2} lg={3} sm={4} key={i} onClick={() => getIconTag(icon)}>
                    <div className='d-flex'>
                        <i className={`flag-icon fi fi-${icon.abbreviation}`}></i>
                        <div className="flex-grow-1 align-self-center">
                            <H5>{icon.abbreviation}</H5>
                            <H6 className='mt-0'>{icon.name}</H6>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
