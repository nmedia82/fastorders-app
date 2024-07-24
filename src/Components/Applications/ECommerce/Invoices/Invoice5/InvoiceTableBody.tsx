import React from 'react'
import { H4 } from '../../../../../AbstractElements'
import { invoiceFourData } from '../../../../../Data/Applications/ECommerce/Invoice'

export default function InvoiceTableBody() {
    return (
        <>
            {invoiceFourData.map((data, i) => (
                <tr key={i}>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "var(--light-shade-primary)" }} >
                        <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontWeight: 600 }}>{i + 1}</span>
                    </td>
                    <td style={{ padding: 16, borderBottom: "1px solid rgba(82, 82, 108, 0.2)" }} >
                        <H4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#009DB5" }} >{data.title}</H4>
                        <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
                    </td>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "var(--light-shade-primary)" }} >
                        <span style={{color: "var(--normal-gray)", fontWeight: 600 }}>${data.price}.00</span>
                    </td>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)" }} >
                        <span style={{color: "var(--normal-gray)", fontWeight: 600 }}>{data.quantity}</span>
                    </td>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "var(--light-shade-primary)" }}>
                        <span style={{ color: "#009DB5", fontWeight: 600, opacity: "0.9" }} >${data.total}.00</span>
                    </td>
                </tr>
            ))}
        </>
    )
}
