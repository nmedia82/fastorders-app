import React from 'react'
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Href } from '../../../../../Utils/Constants';

export default function Print({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) {
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <span className='pb-5' style={{ display: "flex", justifyContent: "center", gap: 15, }}>
            <Link onClick={handlePrint} style={{ background: "#009DB5", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none", }} to={Href}>
                {'Print Invoice'}
                <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10, }} />
            </Link>
            <Link style={{ background: "#009DB533", color: "#009DB5", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none", }} to={Href} download>
                {'Download'}
                <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10, }} />
            </Link>
        </span>
    )
}

