import React from 'react'
import { ClassPrefix, CollapsedToStart, ColumnOrdering, GridBehavior, GutterWidth, GutterWidthNo, HorizontalTimes, MaxContainerWidth, Nestable, None, Offsets, Yes, Col, Collg, Colmd, Colsm, Colxl, Colxxl, OfColumns, Px1140, Px1320, Px540, Px720, Px960 } from '../../../../Utils/Constants'

export default function GridTableBody() {
    return (
        <tbody>
            <tr>
                <th className="text-nowrap" scope="row">{GridBehavior}</th>
                <td>{HorizontalTimes}</td>
                <td colSpan={5}>{CollapsedToStart}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{MaxContainerWidth}</th>
                <td>{None}</td>
                <td>{Px540}</td>
                <td>{Px720}</td>
                <td>{Px960}</td>
                <td>{Px1140}</td>
                <td>{Px1320}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{ClassPrefix}</th>
                <td><code>{Col}</code></td>
                <td><code>{Colsm}</code></td>
                <td><code>{Colmd}</code></td>
                <td><code>{Collg}</code></td>
                <td><code>{Colxl}</code></td>
                <td><code>{Colxxl}</code></td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{OfColumns}</th>
                <td colSpan={6}>{'12'}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{GutterWidth}</th>
                <td colSpan={6}>{GutterWidthNo}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Nestable}</th>
                <td colSpan={6}>{Yes}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Offsets}</th>
                <td colSpan={6}>{Yes}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{ColumnOrdering}</th>
                <td colSpan={6}>{Yes}</td>
            </tr>
        </tbody>
    )
}

