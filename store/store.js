import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./slice"

export const store = configureStore({
    reducer:Reducer,
})

export default store
