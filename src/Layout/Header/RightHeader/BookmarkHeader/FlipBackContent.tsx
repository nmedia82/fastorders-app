import React from 'react'
import { Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LI } from '../../../../AbstractElements'
import { FlipBackContentProps, SidebarItemType } from '../../../../Types/Layout.type'
import { Href } from '../../../../Utils/Constants'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function FlipBackContent({ handleBookmark, bookmarkItems, handleSearch }: FlipBackContentProps) {
    return (
        <LI>
            <div className="bookmark-dropdown flip-back-content">
                <Input type="text" placeholder="search..." onChange={handleSearch} />
                <div className={bookmarkItems.length > 0 ? "Typeahead-menu filled-bookmark custom-scrollbar is-open" : ''}>
                    {bookmarkItems.map((data: SidebarItemType, index: number) => (
                        <div className="ProfileCard u-cf" key={index}>
                            <div className="ProfileCard-avatar">
                                <SvgIcon iconId={`stroke-${data.icon}`} />
                            </div>
                            <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">
                                    <Link className="realname" to={data.url || ''}>{data.title}</Link>
                                    <span className="pull-right">
                                        <a href={Href}>
                                            <i className={`fa ${data.bookmark ? 'fa-star' : 'fa-star-o'} mt-1 icon-star`} onClick={(e) => handleBookmark(e, data)} />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LI>
    )
}
