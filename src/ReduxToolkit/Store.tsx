import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Reducers/Layout/LayoutReducer";
import ThemeCustomizerReducer from "./Reducers/Layout/ThemeCustomizerReducer";
import FilterReducer from "./Reducers/ECommerce/FilterReducer";
import ProductReducer from "./Reducers/ECommerce/ProductReducer";

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        themeCustomizer: ThemeCustomizerReducer,
        filter : FilterReducer,
        product : ProductReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
