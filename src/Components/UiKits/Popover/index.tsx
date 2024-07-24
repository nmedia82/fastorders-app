import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicPopover from './BasicPopover'
import PopoverDirection from './PopoverDirection'
import PopoverOffset from './PopoverOffset'

export default function PopoverContainer() {
    return (
        <Container fluid>
            <Row className="popover-main">
                <BasicPopover />
                <PopoverDirection />
                <PopoverOffset />
            </Row>
        </Container>
    )
}
