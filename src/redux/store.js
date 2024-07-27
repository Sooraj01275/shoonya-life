import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RetreatsSlice from "./reducer/RetreatsSlice";

export const store = configureStore({
    reducer: combineReducers({
        retreats: RetreatsSlice
    }),
})