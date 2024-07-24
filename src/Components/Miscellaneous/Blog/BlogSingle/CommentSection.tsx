import React from 'react'
import { CommentSectionProps } from '../../../../Types/Miscellaneous.type'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { Col, Row } from 'reactstrap'

export default function CommentSection({ socialComment, colClass, item }: CommentSectionProps) {
    return (
        <div className="d-flex align-self-center">
            <Image className="align-self-center" src={dynamicImage(`blog/${item.src}`)} alt="Generic placeholder image" />
            <div className="flex-grow-1">
                <Row>
                    <div className={colClass}>
                        <H6 className="mt-0">{item.name}<span> ( {item.role} )</span></H6>
                    </div>
                    {socialComment &&
                        <Col md={8}>
                            <UL className="flex-row comment-social float-start float-md-end">
                                <LI><i className="icofont icofont-thumbs-up"></i>{item.hits}</LI>
                                <LI><i className="icofont icofont-ui-chat"></i>{item.comments}</LI>
                            </UL>
                        </Col>}
                </Row>
                <P>{item.paragraph}</P>
            </div>
        </div>
    )
}
