import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomColorHoverStrippedTitle } from '../../../../../Utils/Constants'
import { customColorHoverStrippedBody, customColorHoverStrippedHead, customTableSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function CustomColorHoverStripped() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={CustomColorHoverStrippedTitle} subTitle={customTableSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable strip={true} hover={true} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' headData={customColorHoverStrippedHead}>
                        {customColorHoverStrippedBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.title}</td>
                                <td>{data.year}</td>
                                <td>{data.studio}</td>
                                <td>{data.budget}</td>
                                <td>{data.boxOffice}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
