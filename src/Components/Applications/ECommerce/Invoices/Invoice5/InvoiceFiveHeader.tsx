import React from 'react'
import { Table } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import InvoiceRightSide from './InvoiceRightSide'
import InvoiceAddress from './InvoiceAddressDetails'

export default function InvoiceFiveHeader() {
    return (
        <td>
            <Table style={{ width: "100%" }} borderless>
                <tbody>
                    <tr style={{ padding: "0 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <td>
                            <Image className='img-fluid for-light' src={dynamicImage(`logo/logo.png`)} alt="logo" style={{ width: "121px" }} />
                            <Image className='img-fluid for-dark' src={dynamicImage(`logo/logo_dark.png`)} alt="logo" style={{ width: "121px" }} />
                        </td>
                        <td>
                            <InvoiceRightSide />
                        </td>
                    </tr>
                    <tr style={{ display: "flex", justifyContent: "space-between" }}>
                        <InvoiceAddress />
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
