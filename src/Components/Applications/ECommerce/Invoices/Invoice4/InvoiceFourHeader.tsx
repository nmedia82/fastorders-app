import React from 'react'
import { Table } from 'reactstrap'
import { H4, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceFourHeader() {
    return (
        <td>
            <Table style={{ width: "100%" }} borderless>
                <tbody>
                    <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }} >
                        <td>
                            <H4 style={{ fontSize: 42, fontWeight: 600, color: "#009DB5", margin: 0 }} >{'INVOICE'}</H4>
                            <UL className='simple-list' style={{ listStyle: "none", display: "flex", gap: 15, padding: 0, margin: "20px 0" }}>
                                <LI>
                                    <span style={{ color: "var(--normal-gray)", fontSize: 16, fontWeight: 600, opacity: "0.8" }} >{'Invoice to'} :</span>
                                </LI>
                                <LI>
                                    <span style={{ fontWeight: 600, fontSize: 16, color: "#009DB5", display: "block", marginBottom: 8 }}>Brooklyn Simmons</span>
                                    <span style={{ width: "75%", display: "block", lineHeight: "1.5", color: "var(--normal-gray)", fontSize: 16, fontWeight: 400, opacity: "0.8" }} >2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                                    <span style={{ lineHeight: "1.9", fontSize: 16, fontWeight: 400, color: "var(--normal-gray)", opacity: "0.8", display: "block" }} >{'Phone'} : (219) 555-0114</span>
                                    <span style={{ lineHeight: "1.7", fontSize: 16, fontWeight: 400, color: "var(--normal-gray)", opacity: "0.8", display: "block" }} >{'Email'} : yourmail@themesforest.com</span>
                                    <span style={{ lineHeight: "1.7", fontSize: 16, fontWeight: 400, color: "var(--normal-gray)", opacity: "0.8", display: "block" }} >{'Website'}: www.websites.com</span>
                                </LI>
                            </UL>
                        </td>
                        <td>
                            <Image className='img-fluid for-light' style={{ height: 50, marginBottom: 14 }} src={dynamicImage(`logo/logo.png`)} alt="logo" />
                            <Image className='img-fluid for-dark' style={{ height: 50, marginBottom: 14 }} src={dynamicImage(`logo/logo_dark.png`)} alt="logo" />
                            <span style={{ display: "block", color: "var(--normal-gray)", lineHeight: "1.5", fontSize: 16, fontWeight: 400, opacity: "0.8" }} >
                                2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
                            </span>
                            <span style={{ display: "block", lineHeight: "1.5", color: "var(--normal-gray)", fontSize: 16, fontWeight: 400, opacity: "0.8" }}>{'Phone'} : (239) 555-0108</span>
                            <span style={{ display: "block", lineHeight: "1.5", color: "var(--normal-gray)", fontSize: 16, fontWeight: 400, opacity: "0.8" }}>{'Email'} : yuri@themesforest.com</span>
                            <span style={{ display: "block", lineHeight: "1.5", color: "var(--normal-gray)", fontSize: 16, fontWeight: 400, opacity: "0.8" }}>{'Website'}: www.yurithemes.com</span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
