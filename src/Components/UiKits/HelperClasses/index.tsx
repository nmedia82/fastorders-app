import React from 'react'
import { Container, Row } from 'reactstrap'
import BorderStyles from './BorderStyles'
import BordersAndDisplays from './BordersAndDisplays'
import BackgroundColors from './BackgroundColors'
import BorderColor from './BorderColor'
import ImageSize from './ImageSize'
import FontStyle from './FontStyle'
import FontWeight from './FontWeight'
import TextColors from './TextColors'
import Padding from './Padding'
import OneSidePadding from './OneSidePadding'
import Margin from './Margin'
import OneSideMargin from './OneSideMargin'
import FontSize from './FontSize'

export default function HelperClassContainer() {
    return (
        <Container fluid>
            <Row>
                <BorderStyles/>
                <BordersAndDisplays/>
                <BackgroundColors/>
                <BorderColor/>
                <ImageSize/>
                <FontStyle/>
                <FontWeight/>
                <TextColors/>
                <Padding/>
                <OneSidePadding/>
                <Margin/>
                <OneSideMargin/>
                <FontSize/>
            </Row>
        </Container>
    )
}
