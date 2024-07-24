import React from 'react'
import { Input } from 'reactstrap'
import { X } from 'react-feather';
import { useSelector,useDispatch } from 'react-redux';
import { SearchInputProp } from '../../../Types/Layout.type'
import { RootState } from '../../../ReduxToolkit/Store';
import { setIsSearchBarOpen } from '../../../ReduxToolkit/Reducers/Layout/LayoutReducer';

export default function SearchInput({handleSearch}: SearchInputProp) {
    const dispatch = useDispatch();
    const { isSearchBarOpen } = useSelector((state: RootState) => state.layout);
    const searchToggle = () => {
        dispatch(setIsSearchBarOpen(!isSearchBarOpen));
        document.body.classList.remove("offcanvas");
    }
    return (
        <div className="u-posRelative">
            <Input className="Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search yuri .." onChange={handleSearch}/>
            <div className="spinner-border Typeahead-spinner" role="status">
                <span className="sr-only">{'Loading...'}</span>
            </div>
            <X className="close-search" onClick={searchToggle} />
        </div>
    )
}
