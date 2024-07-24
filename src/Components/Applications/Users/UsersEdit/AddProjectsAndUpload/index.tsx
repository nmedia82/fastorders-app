/* eslint-disable jsx-a11y/anchor-has-content */
import { Card, Col, Table } from 'reactstrap'
import { Badges, Btn } from '../../../../../AbstractElements'
import { addProjectTable, addProjectsUploadHead } from '../../../../../Data/Applications/Users'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import TableHead from '../../../../../Utils/CommonComponents/TableHead'
import { AddProjectsAndUploadTitle, Href } from '../../../../../Utils/Constants'

export default function AddProjectsAndUpload() {
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader title={AddProjectsAndUploadTitle} titleClass='card-title mb-0' />
                <div className="table-responsive custom-scrollbar add-project">
                    <Table className="card-table table-vcenter text-nowrap">
                        <TableHead headeData={addProjectsUploadHead} />
                        <tbody>
                            {addProjectTable.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <a className="text-inherit" href={Href} >{item.projectName}</a>
                                    </td>
                                    <td>{item.date}</td>
                                    <td><Badges color={`light-${item.color}`} className={`status-icon txt-${item.color}`}>{item.status}</Badges></td>
                                    <td>{item.price}</td>
                                    <td className="text-end">
                                        <a className="icon" href={Href}></a><Btn color='primary' size='sm'><i className="fa fa-pencil me-1"></i>{'Edit'}</Btn>
                                        <a className="icon" href={Href}></a><Btn color='transparent' size='sm'><i className="fa fa-link me-1"></i>{'Update'}</Btn>
                                        <a className="icon" href={Href}></a><Btn color='danger' size='sm'><i className="fa fa-trash me-1"></i>{'Delete'}</Btn>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}
