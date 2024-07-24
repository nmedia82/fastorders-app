import React from 'react'
import { Container, Row } from 'reactstrap'
import LinkDarkColor from './LinkDarkColor'
import LinkLightColor from './LinkLightColor'
import OutlineAlert from './OutlineAlert'
import AlertWithIcons from './AlertWithIcons'
import DismissingDarkAlert from './DismissingDarkAlert'
import DismissingLightAlert from './DismissingLightAlert'
import LiveAlert from './LiveAlert'
import LeftBorderAlert from './LeftBorderAlert'
import AdditionalAlert from './AdditionalAlert'

export default function AlertContainer() {
    return (
        <Container fluid>
            <Row>
                <LinkDarkColor/>
                <LinkLightColor/>
                <OutlineAlert/>
                <AlertWithIcons/>
                <DismissingDarkAlert/>
                <DismissingLightAlert/>
                <LiveAlert/>
                <LeftBorderAlert/>
                <AdditionalAlert/>
            </Row>
        </Container>
    )
}
