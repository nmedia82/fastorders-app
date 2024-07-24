import React from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import SvgIcon from '../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { RootState } from '../../ReduxToolkit/Store';
import { setSidebarSearchTerm } from '../../ReduxToolkit/Reducers/Layout/LayoutReducer';

export default function SidebarSearch() {
    const dispatch = useDispatch();
    const {sidebarSearchTerm} = useSelector((state: RootState)=> state.layout)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setSidebarSearchTerm(value));
    };
    return (
        <div className="sidebar-search">
            <InputGroup>
                <InputGroupText id="sidebar-search">
                    <SvgIcon iconId='search' />
                </InputGroupText>
                <Input type="text" placeholder="Quick search" value={sidebarSearchTerm} onChange={handleSearch} />
            </InputGroup>
        </div>
    )
}
