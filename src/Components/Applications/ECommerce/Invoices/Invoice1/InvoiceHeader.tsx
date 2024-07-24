import React from 'react'
import { Table } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceHeader() {
    return (
        <td>
            <Table className="table-wrapper custom-scrollbar logo-wrapper" borderless responsive>
                <tbody>
                    <tr>
                        <td>
                            <Image className='img-fluid for-light' src={dynamicImage(`logo/logo.png`)} alt="logo" style={{ width: "121px" }} />
                            <Image className='img-fluid for-dark' src={dynamicImage(`logo/logo_dark.png`)} alt="logo" style={{ width: "121px" }} />
                            <span style={{ color: "var(--body-light-font-color)", opacity: "0.8", display: "block", marginTop: 10 }} >
                                202-555-0258
                            </span>
                        </td>
                        <td className="address" style={{ textAlign: "right", color: "var(--body-light-font-color)", opacity: "0.8", width: "16%" }} >
                            <span>1982 Harvest Lane New York, NY12210 United State</span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
