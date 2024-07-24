import React from 'react'
import { Table } from 'reactstrap'
import InvoiceOrderBody from './InvoiceOrderBody'

export default function InvoiceOrder() {
    return (
        <td>
            <Table className="order-details" style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }} borderless>
                <thead>
                    <tr style={{ background: "#009DB5", borderRadius: "5.47059px", overflow: "hidden", boxShadow: "0px 10.9412px 10.9412px rgb(0 157 181 / 4%), 0px 9.51387px 7.6111px rgb(0 157 181 / 6%), 0px 5.05275px 4.0422px rgb(0 157 181 / 4%)", }}>
                        <th style={{ padding: "18px 15px", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, textAlign: "left", border: "none" }}>
                            <span style={{ color: "#fff" }}>{'Description'}</span>
                        </th>
                        <th style={{ padding: "18px 15px", textAlign: "left", border: "none" }}>
                            <span style={{ color: "#fff" }}>{'Rate'}</span>
                        </th>
                        <th style={{ padding: "18px 15px", textAlign: "left", border: "none" }}>
                            <span style={{ color: "#fff" }}>{'Qty'}</span>
                        </th>
                        <th style={{ padding: "18px 15px", borderTopRightRadius: 8, borderBottomRightRadius: 8, textAlign: "right", border: "none" }}>
                            <span style={{ color: "#fff" }}>{'Line Total'}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <InvoiceOrderBody />
                </tbody>
            </Table>
        </td>
    )
}
