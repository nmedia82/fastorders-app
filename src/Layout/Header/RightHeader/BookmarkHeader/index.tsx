/* eslint-disable array-callback-return */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { menuList } from '../../../../Data/Layout/SidebarMenuList';
import { SidebarItemType } from '../../../../Types/Layout.type';
import BookmarkContainer from './BookmarkContainer';

export default function BookmarkHeader() {
  const [bookmarkItems, setBookmarkItems] = useState<SidebarItemType[]>([]);
  const [bookmarkList, setBookmarkList] = useState<SidebarItemType[]>([]);

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
        menuItem.menu.map((mainSubItem: SidebarItemType) => {
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
      setBookmarkItems(suggestionArray);
    }
    if (searchKey === "") {
      setBookmarkItems([]);
    }
  };
  useEffect(() => {
    let suggestionArray: SidebarItemType[] = [];
    let updatedList: SidebarItemType = {};
    const getBookMarkList = (menuItem: SidebarItemType) => {
      if (menuItem.bookmark && menuItem.url) {
        updatedList = { ...menuItem };
        suggestionArray.push(updatedList);
      }
      if (!menuItem.menu) return;
      menuItem.menu.map((mainSubItem: SidebarItemType) => {
        getBookMarkList(mainSubItem);
      });
    };
    menuList.map((mainItem) => {
      mainItem.menu.map((data) => {
        getBookMarkList(data);
      });
    });
    setBookmarkList(suggestionArray);
  }, []);
  const handleBookmark = (event: React.MouseEvent<HTMLElement, MouseEvent>, item: SidebarItemType) => {
    const updatedList = [...bookmarkList];
    const foundIndex = updatedList.findIndex((bookmarkItem) => bookmarkItem.title === item.title);
    if (foundIndex === -1 && !item.bookmark) {
      item.bookmark = true;
      event.currentTarget.classList.add("starred");
      updatedList.push(item);
      setBookmarkList(updatedList);
    } else {
      event.currentTarget.classList.remove("starred");
      updatedList.splice(foundIndex, 1);
      setBookmarkList(updatedList);
      item.bookmark = false;
    }
  };
  return (
    <BookmarkContainer bookmarkList={bookmarkList} handleSearch={handleSearch} bookmarkItems={bookmarkItems} handleBookmark={handleBookmark} />
  );
}