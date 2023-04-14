import { configureStore } from "@reduxjs/toolkit";
import spreadSheetReducer from "./spreadSheetSlice";

export const store = configureStore({
    reducer: {
        spreadSheet: spreadSheetReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
