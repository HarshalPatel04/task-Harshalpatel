import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: "Sidebar",
    initialState: {
        isSliceOpen: true,
    },
    reducers: {
        toogleSlice: (state) => {
            state.isSliceOpen = !state.isSliceOpen;
        },
    },
});

export const { toogleSlice } = SidebarSlice.actions;
export default SidebarSlice.reducer;