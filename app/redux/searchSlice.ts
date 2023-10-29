import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Photo = {
    id: number;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string;
    user: {
        username: string;
        name: string;
    };
};

type Page = number;
type Results = Array<Photo>
type Loading = boolean;
type Error = boolean;

interface SearchState {
    page: Page
    results: Results
    loading: Loading
    error: Error
}

const initialState: SearchState = {
    page: 1,
    results: [],
    loading: false,
    error: false,
}

export const searchSlice = createSlice({
    name: "searchSlice",
    reducers: {
        setPage: (state: SearchState, action: PayloadAction<Page>) => {
            const page = action.payload;
            state.page = page;
        },
        setResults: (state: SearchState, action: PayloadAction<Results>) => {
            const results = action.payload;
            state.results = results;
        },
        setLoading: (state: SearchState, action: PayloadAction<Loading>) => {
            const loading = action.payload;
            state.loading = loading;
        },
        setError: (state: SearchState, action: PayloadAction<Error>) => {
            const error = action.payload;
            state.error = error;
        },
    },
    initialState
})

export const { setPage, setResults, setLoading, setError } = searchSlice.actions

export const getPage = (state: SearchState) => state.page
export const getResults = (state: SearchState) => state.results
export const getLoading = (state: SearchState) => state.loading
export const getError = (state: SearchState) => state.error

export default searchSlice.reducer
