import React from 'react'
import { Col, Row } from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookmarkListProps, SidebarItemType } from '../../../../Types/Layout.type';
import { RootState } from '../../../../ReduxToolkit/Store';
import { setBookMarkClass } from '../../../../ReduxToolkit/Reducers/Layout/LayoutReducer';
import { LI, UL } from '../../../../AbstractElements';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { Href } from '../../../../Utils/Constants';

export default function BookmarkList({bookmarkList }: BookmarkListProps) {
    const dispatch = useDispatch();
    const layoutState = useSelector((state: RootState) => state.layout);
    const { bookMarkClass } = layoutState;

    const addNewBookmark = () => {
        dispatch(setBookMarkClass(!bookMarkClass));
    };
    return (
        <UL className="simple-list pt-0 p-3 bookmark-dropdown list-group">
            <Row>
                {bookmarkList.map((data: SidebarItemType, index: number) => (
                    <Col xs={4} className="text-center" key={index}>
                        <div className="bookmark-content">
                            <div className="bookmark-icon">
                                <SvgIcon className='stroke-icon' iconId={`stroke-${data.icon}`} />
                            </div>
                            <Link to={data.url || ''}><span>{data.title}</span></Link>
                        </div>
                    </Col>
                ))}
            </Row>
            <LI className="text-center pb-0">
                <a onClick={addNewBookmark} className="flip-btn f-w-700" id="flip-btn" href={Href}>{'Add New Bookmark'}</a>
            </LI>
        </UL>
    )
}
