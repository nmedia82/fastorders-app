import React from 'react'
import { BookMarkContainerProps } from '../../../../Types/Layout.type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../ReduxToolkit/Store';
import { setBookMarkClass } from '../../../../ReduxToolkit/Reducers/Layout/LayoutReducer';
import { H6, LI, UL } from '../../../../AbstractElements';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { Href } from '../../../../Utils/Constants';
import BookmarkList from './BookmarkList';
import FlipBackContent from './FlipBackContent';

export default function BookmarkContainer({ handleBookmark, bookmarkList, bookmarkItems, handleSearch }: BookMarkContainerProps) {
    const dispatch = useDispatch();
    const { bookMarkClass } = useSelector((state: RootState) => state.layout);

    const backToBookmark = () => {
        dispatch(setBookMarkClass(!bookMarkClass));
    };
    return (
        <LI className="onhover-dropdown">
            <SvgIcon iconId='fill-star' />
            <div className="onhover-show-div bookmark-flip">
                <div className="flip-card">
                    <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
                        <div className="front dropdown-title p-0">
                            <H6 className="f-18 mb-4 dropdown-title">{'Bookmark'}</H6>
                            <BookmarkList bookmarkList={bookmarkList} />
                        </div>
                        <div className="back dropdown-title">
                            <UL className='p-0'>
                                <FlipBackContent handleBookmark={handleBookmark} bookmarkItems={bookmarkItems} handleSearch={handleSearch} />
                                <LI className='pb-0'>
                                    <a onClick={backToBookmark} className="f-w-700 d-block flip-back" id="flip-back" href={Href}>{'Back'}</a>
                                </LI>
                            </UL>
                        </div>
                    </div>
                </div>
            </div>
        </LI>
    )
}