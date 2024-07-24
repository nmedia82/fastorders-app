import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { SupportTicketList } from '../../../Utils/Constants'
import { supportTicketSubTitle } from '../../../Data/Miscellaneous/SupportTicket'
import TicketList from './TicketList'
import TicketTable from './TicketTable'

export default function SupportTicketContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CommonCardHeader title={SupportTicketList} subTitle={supportTicketSubTitle} />
                        <CardBody>
                            <TicketList />
                            <TicketTable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
