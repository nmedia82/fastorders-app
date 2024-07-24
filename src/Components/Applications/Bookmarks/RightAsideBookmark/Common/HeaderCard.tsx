import React from 'react'
import { useDispatch } from 'react-redux';
import { CardHeader } from 'reactstrap';
import { Grid, List } from 'react-feather';
import { HeaderCardProp } from '../../../../../Types/Bookmark.type';
import { setGridView } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { H2, LI, UL } from '../../../../../AbstractElements';
import { Href } from '../../../../../Utils/Constants';

export default function HeaderCard({ title }: HeaderCardProp) {
    const dispatch = useDispatch();
    const gridBookmark = () => {
        dispatch(setGridView(true));
    };
    const listBookmark = () => {
        dispatch(setGridView(false));
    };
    return (
        <CardHeader className='d-flex'>
            <H2 className='mb-0'>{title}</H2>
            <UL className='simple-list flex-row'>
                <LI>
                    <a className='grid-bookmark-view' href={Href}>
                        <Grid onClick={gridBookmark} />
                    </a>
                </LI>
                <LI>
                    <a className='list-layout-view' href={Href}>
                        <List onClick={listBookmark} />
                    </a>
                </LI>
            </UL>
        </CardHeader>
    )
}

