import { configureStore } from "@reduxjs/toolkit";
import LinkReducer from "./slice/CommonLinkSlice"
import utilsReducer from "./slice/utilsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"

const rootReducers = combineReducers({
    linkReducer : LinkReducer,
    utils : utilsReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducers
});