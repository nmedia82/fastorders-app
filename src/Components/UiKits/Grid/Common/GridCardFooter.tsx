import React from 'react'
import { CardFooter, Table } from 'reactstrap'
import { GridCardFooterProps } from '../../../../Types/UiKits.type'
import { Class, ValueClass } from '../../../../Utils/Constants'

export default function GridCardFooter({ code, value }: GridCardFooterProps) {
    return (
        <CardFooter>
            <div className="table-responsive">
                <Table className="w-100" borderless>
                    <tbody>
                        <tr>
                            <th> {Class}</th>
                            <th>{ValueClass}</th>
                        </tr>
                        <tr>
                            <td><code>{code}</code></td>
                            <td>{value}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CardFooter>
    )
}
