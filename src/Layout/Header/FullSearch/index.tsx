/* eslint-disable array-callback-return */
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, FormGroup } from 'reactstrap';
import { menuList } from '../../../Data/Layout/SidebarMenuList';
import { RootState } from '../../../ReduxToolkit/Store';
import { SidebarItemType } from '../../../Types/Layout.type';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

export default function FullSearch() {
    const { isSearchBarOpen } = useSelector((state: RootState) => state.layout)
    const [suggestion, setSuggestion] = useState<SidebarItemType[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchKey = event.target.value.toLowerCase();
        if (searchKey !== "") {
            let icon: string | undefined;
            let suggestionArray: SidebarItemType[] = [];
            let updatedList: SidebarItemType = {};
            const deepSearchFun = (menuItem: any, searchKeyValue: string, mainTitle: string | undefined) => {
                if (menuItem.title.toLowerCase().includes(searchKeyValue) && menuItem.url) {
                    updatedList = { ...menuItem, mainTitle, icon };
                    suggestionArray.push(updatedList);
                }
                if (!menuItem.menu) return;
                menuItem.menu.map((mainSubItem: any) => {
                    if (menuItem.icon) {
                        icon = menuItem.icon;
                    }
                    deepSearchFun(mainSubItem, searchKeyValue, mainTitle);
                });
            };
            menuList.map((mainItem) => {
                mainItem.menu.map((data) => {
                    const mainTittle = data.title;
                    deepSearchFun(data, searchKey, mainTittle);
                });
            });
            setSuggestion(suggestionArray);
        }
        if (searchKey === "") {
            setSuggestion([]);
        }
        setSearchValue(searchKey);
    };
    useEffect(() => {
        if (searchValue.trim() !== "") {
            document.body.classList.add("offcanvas");
        } else { document.body.classList.remove("offcanvas"); }
        return () => { document.body.classList.remove("offcanvas"); };
    }, [searchValue]);

    return (
        <Form className={`form-inline search-full col ${isSearchBarOpen ? "open" : ""}`}>
            <FormGroup className="form-group w-100">
                <div className="Typeahead Typeahead--twitterUsers">
                    <SearchInput handleSearch={handleSearch} />
                    <SearchResult suggestion={suggestion} />
                </div>
            </FormGroup>
        </Form>
    )
}
