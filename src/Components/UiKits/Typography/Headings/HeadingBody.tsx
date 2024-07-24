import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'
import { H1Tag, H2Tag, H3Tag, H4Tag, H5Tag, H6Tag, Heading1MEGA, Heading2XL, Heading3LARGE, Heading4MEDIUM, Heading5SMALL, Heading6, Rem0875, Rem0938, Rem1, Rem1125, Rem125, Rem1375 } from '../../../../Utils/Constants'

export default function HeadingBody() {
    return (
        <tbody>
            <tr>
                <td><code>{H1Tag}</code></td>
                <td><H1 className="mb-0">{Rem1375}</H1></td>
                <td><H1><span>{Heading1MEGA}</span></H1></td>
            </tr>
            <tr>
                <td><code>{H2Tag}</code></td>
                <td><H2 className="mb-0">{Rem125}</H2></td>
                <td><H2><span> {Heading2XL}</span></H2></td>
            </tr>
            <tr>
                <td><code>{H3Tag}</code></td>
                <td><H3 className="mb-0">{Rem1125}</H3></td>
                <td><H3><span> {Heading3LARGE}</span></H3></td>
            </tr>
            <tr>
                <td><code>{H4Tag}</code></td>
                <td><H4 className="mb-0">{Rem1}</H4></td>
                <td><H4><span> {Heading4MEDIUM}</span></H4></td>
            </tr>
            <tr>
                <td><code>{H5Tag}</code></td>
                <td><H5 className="mb-0">{Rem0938}</H5></td>
                <td><H5><span> {Heading5SMALL}</span></H5></td>
            </tr>
            <tr>
                <td className="pb-0"><code>{H6Tag}</code></td>
                <td className="pb-0"><H6 className="mb-0">{Rem0875}</H6></td>
                <td className="pb-0"><H5><span>{Heading6}</span></H5></td>
            </tr>
        </tbody>
    )
}