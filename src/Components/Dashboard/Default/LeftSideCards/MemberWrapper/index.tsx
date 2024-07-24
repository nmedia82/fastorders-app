import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { H2 } from '../../../../../AbstractElements'
import { Href, MembersStatistics } from '../../../../../Utils/Constants'
import { memberWrapperColumns, memberWrapperData } from '../../../../../Data/Dashboard/Default'

export default function MemberWrapper() {
    return (
        <Col xl={6} className="order-md-iii">
            <Card className="title-line overflow-hidden member-wrapper">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{MembersStatistics}<span className="f-12 f-w-500 f-light d-block">{'Over 10k members'}</span></H2>
                        <div className="card-header-right-icon">
                            <a className="link-with-icon" href={Href}>{'+ Add New Member'}</a>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="member-datatable p-0">
                    <DataTable className="custom-scrollbar" data={memberWrapperData} columns={memberWrapperColumns}/>
                </CardBody>
            </Card>
        </Col>
    )
}
