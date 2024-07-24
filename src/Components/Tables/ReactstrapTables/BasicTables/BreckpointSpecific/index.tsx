import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BreckpointSpecificTitle } from '../../../../../Utils/Constants'
import { breckPointSpecificSubTitle, breckpointSpecificBody, breckpointSpecificHead } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function BreckpointSpecific() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={BreckpointSpecificTitle} subTitle={breckPointSpecificSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable size='sm' headData={breckpointSpecificHead}>
                                {breckpointSpecificBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.orderId}</td>
                                        <td>{data.price}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.total}</td>
                                    </tr>
                                ))}
                            </CommonTable>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
