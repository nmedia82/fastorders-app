import React from 'react'
import { CardFooter, Col } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { Cancel, Submit } from '../../../../../Utils/Constants'

export default function CardFooterSection() {
    return (
        <CardFooter className='text-end'>
            <Col sm={9} className="offset-sm-3">
                <Btn color="primary" className="me-3">
                    {Submit}
                </Btn>
                <Btn color="light">
                    {Cancel}
                </Btn>
            </Col>
        </CardFooter>
    )
}
