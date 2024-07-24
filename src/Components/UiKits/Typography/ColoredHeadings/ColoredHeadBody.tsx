import React from 'react'
import { H1Tag, H2Tag, H3Tag, H4Tag, H5Tag, H6Tag, Heading1, SubHeading } from '../../../../Utils/Constants'
import { H1, H2, H3, H4, H5 } from '../../../../AbstractElements'

export default function ColoredHeadBody() {
    return (
        <tbody>
            <tr>
                <td><code>{H1Tag}</code></td>
                <td>
                    <H1><span className="txt-primary"> {Heading1}</span>{SubHeading}</H1>
                </td>
            </tr>
            <tr>
                <td><code>{H2Tag}</code></td>
                <td>
                    <H2><span className="txt-secondary"> {Heading1}</span>{SubHeading}</H2>
                </td>
            </tr>
            <tr>
                <td><code>{H3Tag}</code></td>
                <td>
                    <H3><span className="txt-success"> {Heading1}</span>{SubHeading}</H3>
                </td>
            </tr>
            <tr>
                <td><code>{H4Tag}</code></td>
                <td>
                    <H4><span className="txt-info"> {Heading1}</span>{SubHeading}</H4>
                </td>
            </tr>
            <tr>
                <td><code>{H5Tag}</code></td>
                <td>
                    <H5><span className="txt-warning"> {Heading1}</span>{SubHeading}</H5>
                </td>
            </tr>
            <tr>
                <td className="pb-0"><code>{H6Tag}</code></td>
                <td className="pb-0">
                    <H5><span className="txt-danger"> {Heading1}</span>{SubHeading}</H5>
                </td>
            </tr>
        </tbody>
    )
}
