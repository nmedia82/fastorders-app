import React from 'react'
import { Table } from 'reactstrap'
import { P } from '../../../../../AbstractElements'
import { invoiceFourDetails } from '../../../../../Data/Applications/ECommerce/Invoice'

export default function InvoiceFourDetail() {
    return (
        <td>
            <Table style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
                <tbody>
                    <tr>
                        {invoiceFourDetails.map((data, i) => (
                            <td style={{ background: "var(--light-shade-primary)", padding: "15px 25px" }} key={i}>
                                <P style={{ fontSize: 16, fontWeight: 500, color: "var(--normal-gray)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{data.title} :</P>
                                <span style={{ fontSize: 16, fontWeight: 600 }}>{data.value}</span>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
