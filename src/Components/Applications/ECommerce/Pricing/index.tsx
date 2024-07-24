import { Col, Container, Row } from 'reactstrap'
import BecomeMember from './BecomeMember'
import SimplePricingCard from './SimplePricingCard'

export default function PricingContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <BecomeMember/>
                    <SimplePricingCard/>
                </Col>
            </Row>
        </Container>
    )
}
