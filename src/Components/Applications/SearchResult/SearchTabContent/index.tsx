import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { fetchSearchData } from '../../../../ReduxToolkit/Reducers/SearchResultReducer';
import { AppDispatch, RootState } from '../../../../ReduxToolkit/Store';
import { SearchTabContentProp } from '../../../../Types/SearchResult.type';
import AllTab from './AllTab';
import ImageTab from './ImageTab';
import VideoTab from './VideoTab';

export default function SearchTabContent({ activeTab }: SearchTabContentProp) {
    const { allResult } = useSelector((state: RootState) => state.searchResult);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchSearchData()); }, [dispatch]);
    return (
        <TabContent activeTab={activeTab}>
            <TabPane className='search-links' tabId={1}>
                <AllTab allResult={allResult} />
            </TabPane>
            <TabPane tabId={2}>
                <ImageTab />
            </TabPane>
            <TabPane tabId={3}>
                <VideoTab allResult={allResult} />
            </TabPane>
        </TabContent>
    )
}

