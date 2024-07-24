import React from 'react'
import { Table } from 'reactstrap'
import { CommonTableProps } from '../../../../../Types/Tables.type'

export default function CommonTable({ tableClass, strip, caption, size, hover, headClass = '', headRowClass = '', headData, children }:CommonTableProps) {
    return (
        <Table className={tableClass} striped={strip} hover={hover} size={size}>
            {caption && <caption>{caption}</caption>}
            <thead className={headClass}>
                <tr className={headRowClass}>
                    {headData.map((head) => (
                        <th key={head.id} scope="col">{head.head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </Table>
    )
}
