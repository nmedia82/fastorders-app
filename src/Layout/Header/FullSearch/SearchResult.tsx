import React from 'react'
import { Link } from 'react-router-dom'
import { SearchResultProp, SidebarItemType } from '../../../Types/Layout.type'
import { Emptysearch } from '../../../Utils/Constants'
import SvgIcon from '../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function SearchResult({ suggestion }: SearchResultProp) {
    return (
        <>
            <div className={`Typeahead-menu ${suggestion.length > 0 ? "is-open" : ""}`} id="search-outer">
                <div className="header-search-suggestion custom-scrollbar">
                    {suggestion.map((item: SidebarItemType, i: number) => (
                        <div className="ProfileCard u-cf" key={i}>
                            <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">
                                    <Link className="realname  w-100 d-flex justify-content-start gap-2" to={item.url || ''}>
                                        <SvgIcon iconId={`stroke-${item.icon}`} />
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Typeahead-menu empty-menu">
                <div className="tt-dataset tt-dataset-0">
                    <div className="EmptyMessage">{Emptysearch}</div>
                </div>
            </div>
        </>
    )
}
