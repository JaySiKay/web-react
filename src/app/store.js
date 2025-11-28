import {configureStore} from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice.js';
export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
    devTools: {
        name: 'Web React Lab 13 *.*',
    },
})