import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Reducers/Layout/LayoutReducer";
import SearchResultReducer from "./Reducers/SearchResultReducer";
import ThemeCustomizerReducer from "./Reducers/Layout/ThemeCustomizerReducer";
import ContactReducer from "./Reducers/ContactReducer";
import TasksReducer from "./Reducers/TasksReducer";
import UsersReducer from "./Reducers/UsersReducer";
import BookmarkReducer from "./Reducers/BookmarkReducer";
import TodoReducer from "./Reducers/TodoReducer";
import EmailReducer from "./Reducers/LetterBoxReducer";
import ChatReducer from "./Reducers/ChatReducer";
import ProductReducer from "./Reducers/ECommerce/ProductReducer";
import FilterReducer from "./Reducers/ECommerce/FilterReducer";
import ProjectReducer from "./Reducers/Applications/ProjectReducer";
import JobSearchReducer from "./Reducers/JobSearchReducer";
import CartReducer from "./Reducers/CartReducer";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    searchResult: SearchResultReducer,
    themeCustomizer: ThemeCustomizerReducer,
    contact: ContactReducer,
    tasks: TasksReducer,
    userCards: UsersReducer,
    bookmark: BookmarkReducer,
    todos: TodoReducer,
    email: EmailReducer,
    chat: ChatReducer,
    product: ProductReducer,
    filter: FilterReducer,
    project: ProjectReducer,
    jobSearch: JobSearchReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
