import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import LetterLeftAside from './LetterLeftAside';
import LetterRightAside from './LetterRightAside';

export default function LetterBoxContainer() {
    const [navId, setNavId] = useState("1");

    return (
        <Container fluid>
            <div className="email-wrap email-main-wrapper">
                <Row>
                    <LetterLeftAside navId={navId} setNavId={setNavId} />
                    <LetterRightAside navId={navId} />
                </Row>
            </div>
        </Container>
    )
}
