import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { dayList, monthList } from '../../../../../../Data/Applications/Contacts'

export default function MoreInfoDrop() {
    return (
        <>
            <Col md={12}>
                <Row className='g-3'>
                    <Col sm={4}>
                        <Input type="select" id="birth_day">
                            <option className="f-w-600">{'Day'}</option>
                            {dayList.map((list, i) => (
                                <option key={i}>{list}</option>
                            ))}
                        </Input>
                    </Col>
                    <Col sm={4}>
                        <Input type="select">
                            <option className="f-w-600">{'Month'}</option>
                            {monthList.map((list, index) => (
                                <option key={index}>{list}</option>
                            ))}
                        </Input>
                    </Col>
                    <Col sm={4}>
                        <Input id="birth_year" type="text" />
                    </Col>
                </Row>
            </Col>
            <Col md={12}>
                <Row className='g-3'>
                    <Col sm={6}><Label>{'Personality'}</Label></Col>
                    <Input type="text" required />
                    <Col sm={6}><Label>{'Interest'}</Label></Col>
                    <Input type="text" required />
                </Row>
            </Col>
        </>
    )
}
