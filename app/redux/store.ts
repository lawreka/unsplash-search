import { combineReducers, configureStore } from "@reduxjs/toolkit"
import type { PreloadedState } from '@reduxjs/toolkit'

import searchReducer from "./searchSlice"

export const store = configureStore({
    reducer: searchReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: searchReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof searchReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
