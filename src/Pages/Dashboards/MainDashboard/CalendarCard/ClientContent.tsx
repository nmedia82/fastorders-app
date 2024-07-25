import React from 'react'
import { Table } from 'reactstrap'
import { clientContentList } from '../../../../Data/Dashboard/Project'
import { Btn, H4, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { Href } from '../../../../Utils/Constants'

export default function ClientContent() {
    return (
        <div className="table-responsive custom-scrollbar">
            <Table className="client-content">
                <tbody>
                    {clientContentList.map((item) => (
                        <tr key={item.id}>
                            <td> <Image className="img-fluid" src={dynamicImage(`dashboard-3/client/${item.image}`)} alt="client" /></td>
                            <td>
                                <H4 className="mb-1">{item.title}</H4>
                                <UL className="client-sub-content simple-list flex-row">
                                    <LI className="d-flex">
                                        <SvgIcon iconId='video' />
                                        <span className="f-12 f-light f-w-500">{'Zoom Meeting'}</span>
                                    </LI>
                                    <LI className="d-flex">
                                        <SvgIcon iconId='dashboard-clock' />
                                        <span className="f-12 f-light f-w-500">{'09 am'}</span>
                                    </LI>
                                    <LI className="d-flex f-12 f-light f-w-500">{'Lead by '}
                                        <span className="txt-warning">{item.name}</span>
                                    </LI>
                                </UL>
                            </td>
                            <td><Btn color='light' className="f-12 f-w-500" href={Href}>{'View'}</Btn></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
