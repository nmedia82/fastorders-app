import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HeadingsTitle } from '../../../../Utils/Constants'
import { headingSubTitle, headingTableHead } from '../../../../Data/UiKits/Typography'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import HeadingBody from './HeadingBody'

export default function Headings() {
    return (
        <Col xxl={6}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={HeadingsTitle} subTitle={headingSubTitle} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="mb-0 typography-table">
                            <TableHead headeData={headingTableHead} />
                            <HeadingBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
