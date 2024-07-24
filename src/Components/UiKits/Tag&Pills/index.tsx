import React from 'react'
import { Container, Row } from 'reactstrap'
import BadgesContextual from './BadgesContextual'
import PillsContextual from './PillsContextual'
import NumberBadges from './NumberBadges'
import NumberPills from './NumberPills'
import BadgeWithIcon from './BadgeWithIcon'
import RoundedPillsIcon from './RoundedPillsIcon'
import BadgeHeading from './BadgeHeading'
import BadgeButton from './BadgeButton'

export default function TagAndPillsContainer() {
    return (
        <Container fluid>
            <Row>
                <BadgesContextual />
                <PillsContextual/>
                <NumberBadges/>
                <NumberPills/>
                <BadgeWithIcon/>
                <RoundedPillsIcon/>
                <BadgeHeading/>
                <BadgeButton/>
            </Row>
        </Container>
    )
}
