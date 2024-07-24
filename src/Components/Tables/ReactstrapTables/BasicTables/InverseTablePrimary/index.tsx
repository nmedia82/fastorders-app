import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { InverseTablePrimaryTitle } from '../../../../../Utils/Constants'
import CommonTable from '../Common/CommonTable'
import { inversePrimaryBody, inversePrimaryHeader, inverseTablePrimarySubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'

export default function InverseTablePrimary() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={InverseTablePrimaryTitle} subTitle={inverseTablePrimarySubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable strip={true} headData={inversePrimaryHeader} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' >
                        {inversePrimaryBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.company}</td>
                                <td>{data.salary}</td>
                                <td>{data.email}</td>
                                <td>{data.position}</td>
                                <td>{data.country}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
