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

interface SearchState {
    page: Page
    results: Results
}

const initialState: SearchState = {
    page: 1,
    results: [],
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
        }
    },
    initialState
})

export const { setPage, setResults } = searchSlice.actions

export const getPage = (state: SearchState) => state.page
export const getResults = (state: SearchState) => state.results

export default searchSlice.reducer
