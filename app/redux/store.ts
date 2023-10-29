import { combineReducers, configureStore } from "@reduxjs/toolkit"
import type { PreloadedState } from '@reduxjs/toolkit'

import searchReducer from "./searchSlice"

export const store = configureStore({
    reducer: searchReducer,
})

const rootReducer = combineReducers({
    reducer: searchReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
