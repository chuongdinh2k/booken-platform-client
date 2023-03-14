import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

interface IState {
    loading: boolean;
}

const initialState: IState = {
    loading: false,
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        }
});

export const { setLoading } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;