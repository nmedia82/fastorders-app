import React from 'react'
import { Input } from 'reactstrap'
import { Mic } from 'react-feather'
import SvgIcon from '../../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function ContactSearch() {
    return (
        <div className="search-contacts">
            <Input type="text" placeholder="Name and phone number" />
            <SvgIcon iconId="stroke-search" />
            <Mic className="mic-search" />
        </div>
    )
}
