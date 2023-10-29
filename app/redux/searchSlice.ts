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
type Query = string;
type OrderByFilter = string;
type ColorFilter = string;

interface SearchState {
    page: Page
    results: Results
    loading: Loading
    error: Error
    query: Query
    orderBy: OrderByFilter
    color: ColorFilter
}

const initialState: SearchState = {
    page: 1,
    results: [],
    loading: false,
    error: false,
    query: "",
    orderBy: "relevant",
    color: "none",
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
        setQuery: (state: SearchState, action: PayloadAction<Query>) => {
            const query = action.payload;
            state.query = query;
        },
        setOrderBy: (state: SearchState, action: PayloadAction<OrderByFilter>) => {
            const orderBy = action.payload;
            state.orderBy = orderBy;
        },
        setColor: (state: SearchState, action: PayloadAction<ColorFilter>) => {
            const color = action.payload;
            state.color = color;
        }
        
    },
    initialState
})

export const { setPage, setResults, setLoading, setError, setQuery, setOrderBy, setColor } = searchSlice.actions

export const getPage = (state: SearchState) => state.page
export const getResults = (state: SearchState) => state.results
export const getLoading = (state: SearchState) => state.loading
export const getError = (state: SearchState) => state.error
export const getQuery = (state: SearchState) => state.query
export const getOrderBy = (state: SearchState) => state.orderBy
export const getColor = (state: SearchState) => state.color

export default searchSlice.reducer
