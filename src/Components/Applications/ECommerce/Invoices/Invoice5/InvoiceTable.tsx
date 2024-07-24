import React from 'react'
import { Table } from 'reactstrap'
import InvoiceTableBody from './InvoiceTableBody'
import InvoiceTableTotal from './InvoiceTableTotal'

export default function InvoiceTable() {
    return (
        <td>
            <Table className="table-responsive" style={{ width: "100%", borderSpacing: 0 }} >
                <thead>
                    <tr style={{ background: "#009DB5" }}>
                        <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopLeftRadius: 10, border: "none" }} >
                            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{'No.'}</span>
                        </th>
                        <th style={{ padding: "18px 16px", textAlign: "left", border: "none" }}>
                            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{'Description'}</span>
                        </th>
                        <th style={{ padding: "18px 15px", textAlign: "center", border: "none" }}>
                            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{'Unite Price'}</span>
                        </th>
                        <th style={{ padding: "18px 15px", textAlign: "center", border: "none" }}>
                            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{'Quantity'}</span>
                        </th>
                        <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopRightRadius: 10, border: "none" }} >
                            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{'Subtotal'}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <InvoiceTableBody />
                    <InvoiceTableTotal />
                </tbody>
            </Table>
        </td>
    )
}

