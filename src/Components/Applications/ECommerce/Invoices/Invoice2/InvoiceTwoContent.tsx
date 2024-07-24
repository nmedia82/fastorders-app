import React from 'react'
import { Table } from 'reactstrap'
import { invoiceHeaderData, invoiceTwoDataList } from '../../../../../Data/Applications/ECommerce/Invoice'
import { H4, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Dollar } from '../../../../../Utils/Constants'

export default function InvoiceTwoContent() {
    return (
        <td>
            <Table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px dashed rgba(82, 82, 108, 0.1)" }}>
                <thead>
                    <tr style={{ background: "#009DB5", borderRadius: "5.47059px", overflow: "hidden", boxShadow: "0px 10.9412px 10.9412px rgb(0 157 181 / 4%), 0px 9.51387px 7.6111px rgb(0 157 181 / 6%), 0px 5.05275px 4.0422px rgb(0 157 181 / 4%)" }} >
                        {invoiceHeaderData.map((data, i) => (
                            <th style={{ padding: "18px 15px", textAlign: "left", border: "none" }} key={i}>
                                <span style={{ color: "#fff", fontSize: 18 }}>{data}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {invoiceTwoDataList.map((data, i) => (
                        <tr style={{ backgroundColor: "rgba(0, 157, 181, 0.11)", boxShadow: "0px 1px 0px 0px rgba(82, 82, 108, 0.15)" }} key={i}>
                            <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: 10 }} >
                                <span style={{ width: 54, height: 51, backgroundColor: "var(--light-shade-primary)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 5 }} >
                                    <Image src={dynamicImage(`product/product-categories/${data.image}.png`)} alt="laptop" style={{ height: 29 }} />
                                </span>
                                <UL style={{ padding: 0, margin: 0, listStyle: "none" }}>
                                    <LI>
                                        <H4 style={{ fontWeight: 400, margin: "4px 0px", fontSize: 16 }}>{data.title}</H4>
                                        <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 14 }}>{data.code}</span>
                                    </LI>
                                </UL>
                            </td>
                            <td style={{ padding: "18px 15px" }}>
                                <span style={{ fontSize: "16px" }}>{data.quantity}</span>
                            </td>
                            <td style={{ padding: "18px 15px", width: "12%" }}>
                                <span style={{ fontSize: "16px" }}>${data.price}</span>
                            </td>
                            <td style={{ padding: "18px 15px", width: "12%" }}>
                                <span style={{ fontSize: "16px" }}>{data.unit}</span>
                            </td>
                            <td style={{ padding: "18px 15px", width: "10%" }}>
                                <span style={{ fontSize: "16px" }}>{data.vat}</span>
                            </td>
                            <td style={{ padding: "18px 15px" }}>
                                <span style={{ fontSize: "16px" }}>{Dollar}{data.total}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </td>
    )
}

