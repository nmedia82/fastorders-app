import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { P } from '../../../../AbstractElements'
import { InlineTextElementsTitle } from '../../../../Utils/Constants'
import { inlineTextSubTitle } from '../../../../Data/UiKits/Typography'

export default function InlineTextElements() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={InlineTextElementsTitle} subTitle={inlineTextSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        <P className="mb-0">{'You can use the mark tag to'}<mark>{' highlight '}</mark>{'text'}</P>
                        <P className="mb-0"><del>{'This line of text is meant to be treated as deleted text.'}</del></P>
                        <P className="mb-0"><s>{'This line of text is meant to be treated as no longer accurate.'}</s></P>
                        <P className="mb-0"><ins>{'This line of text is meant to be treated as an addition to the document.'}</ins></P>
                        <P className="mb-0"><u>{'This line of text will render as underlined'}</u> </P>
                        <P className="mb-0"><small>{'This line of text is meant to be treated as fine print.'}</small></P>
                        <P className="mb-0"><strong>{'This line rendered as bold text.'}</strong></P>
                        <P className="mb-0"><em>{'This line rendered as italicized text.'}</em></P>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
