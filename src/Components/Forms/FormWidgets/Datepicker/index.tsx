import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultCalendar from './DefaultCalendar'
import ReactstrapCalendar from './ReactstrapCalendar'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

export default function DatePickerContainer() {
    return (
        <Container fluid>
            <Row>
                <DefaultCalendar />
                <ReactstrapCalendar />
                <DatePicker />
                <TimePicker />
            </Row>
        </Container>
    )
}
