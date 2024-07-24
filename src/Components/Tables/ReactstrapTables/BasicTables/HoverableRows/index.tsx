import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonTable from '../Common/CommonTable'
import { HoverableRowsTitle } from '../../../../../Utils/Constants'
import { hoverableRowsBody, hoverableRowsHeader, hoverableRowsSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'

export default function HoverableRows() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={HoverableRowsTitle} subTitle={hoverableRowsSubTitle} />
                <div className="table-responsive signal-table custom-scrollbar">
                    <CommonTable headData={hoverableRowsHeader} hover={true} >
                        {hoverableRowsBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td className="d-flex align-items-center">
                                    {data.icon}
                                    <span className={`font-${data.color}`}>{data.status}</span></td>
                                <td>{data.signalName}</td>
                                <td>{data.security}</td>
                                <td>{data.stage}</td>
                                <td>{data.schedule}</td>
                                <td>{data.teamLead}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
