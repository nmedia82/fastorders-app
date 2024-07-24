import React from 'react'
import { invoiceThreeData } from '../../../../../Data/Applications/ECommerce/Invoice'
import { H4, LI, UL } from '../../../../../AbstractElements'

export default function InvoiceThreeBody() {
    return (
        <>
            {invoiceThreeData.map((data, i) => (
                <tr key={i}>
                    <td style={{ padding: "18px 15px 18px 0", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid var(--recent-dashed-border)" }} >
                        <span style={{ width: 3, height: 37, backgroundColor: `${data.color}` }} />
                        <UL style={{ padding: 0, margin: 0, listStyle: "none" }} className='simple-list'>
                            <LI>
                                <H4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#009DB5" }}>{data.title}</H4>
                                <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
                            </LI>
                        </UL>
                    </td>
                    <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid var(--recent-dashed-border)" }} >
                        <span style={{ color: "var(--normal-gray)", opacity: "0.8" }}>{data.quantity}</span>
                    </td>
                    <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid var(--recent-dashed-border)" }} >
                        <span style={{ color: "var(--normal-gray)", opacity: "0.8" }}>${data.price}</span>
                    </td>
                    <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid var(--recent-dashed-border)" }} >
                        <span style={{ color: "var(--normal-gray)", opacity: "0.8" }}>${data.total}</span>
                    </td>
                </tr>
            ))}
        </>
    )
}
