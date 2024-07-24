import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import DraggableEvents from './DraggableEvents'
import DefaultCalendar from './DefaultCalendar'

export default function CalendarContainer() {
    return (
        <Container className='calendar-basic' fluid>
            <Card>
                <CardBody>
                    <Row>
                        <DraggableEvents/>
                        <DefaultCalendar/>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )
}
