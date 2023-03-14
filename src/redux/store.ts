import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import reducer, { RootState } from "./slices";

const persistConfig = {
    key: "root",
    whitelist: ["auth"],
};


const store = configureStore({
    reducer: reducer,
    middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;

export default store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;