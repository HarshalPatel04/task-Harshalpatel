import sidebarSlice from "./sidebar-slice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        app: sidebarSlice,
    }
})

export default store;

