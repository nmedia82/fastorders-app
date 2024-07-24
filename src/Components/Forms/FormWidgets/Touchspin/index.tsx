import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultTouchspin from './DefaultTouchspin'
import OutlinedTouchspin from './OutlinedTouchspin'
import IconsWithPrefixAndPostfix from './IconsWithPrefixAndPostfix'
import ButtonsWithPrefixPostfix from './ButtonsWithPrefixPostfix'
import RoundedTouchspin from './RoundedTouchspin'

export default function TouchspinContainer() {
    return (
        <Container fluid>
            <div className="bootstrap-touchspin">
                <Row>
                    <DefaultTouchspin/>
                    <OutlinedTouchspin/>
                    <IconsWithPrefixAndPostfix/>
                    <ButtonsWithPrefixPostfix/>
                    <RoundedTouchspin/>
                </Row>
            </div>
        </Container>
    )
}
