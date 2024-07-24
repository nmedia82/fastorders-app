import React from 'react'
import { LI, UL } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function InvoiceRightSide() {
    return (
        <UL className='simple-list flex-row' style={{ listStyle: "none", display: "flex", alignItems: "center", background: "linear-gradient(291deg, #009DB5 21.2%, #3fcbe1 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }} >
            <LI>
                <SvgIcon className="stroke-icon" iconId="call" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
                <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>(239) 555-0108</span>
            </LI>
            <LI style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.3)", borderRight: "1px solid rgba(255, 255, 255, 0.3)", padding: "0 22px" }} >
                <SvgIcon className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="email-box" />
                <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>yuri@themesforest.com</span>
            </LI>
            <LI>
                <SvgIcon className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
                <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>{'Website'}: www.yurithemes.com</span>
            </LI>
        </UL>
    )
}
