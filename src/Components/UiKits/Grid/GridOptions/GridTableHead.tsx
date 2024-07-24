import React from 'react'
import { P } from '../../../../AbstractElements'
import { gridtableHeadData } from '../../../../Data/UiKits/Grid'

export default function GridTableHead() {
    return (
        <thead>
            <tr>
                <th></th>
                {gridtableHeadData && gridtableHeadData.map((item, index) => (
                    <th key={index} className="text-center">
                        <P>{item.text1} </P>
                        {item.class ? <small className={item.class}>{item.text2}</small> : <small>{item.text2}</small>}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
