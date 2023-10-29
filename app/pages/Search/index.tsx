"use client"

import { useEffect } from "react"

import { Photos } from "components/Photos"
import { SearchBar } from "components/SearchBar"
import { Order } from "components/Filters/Order"
import { Color } from "components/Filters/Color"
import { Pages } from "components/Pagination"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { setLoading, setResults, setError, getQuery, getResults, getOrderBy, getColor, setPage } from "redux/searchSlice"
import { getSearchResults } from "lib/search"

import { SearchPageWrapper, SearchBarWrapper } from "./styled"

export const SearchPage = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector(getQuery);
    const orderBy = useAppSelector(getOrderBy);
    const color = useAppSelector(getColor);
    const results = useAppSelector(getResults)

    useEffect(() => {
        if (query?.length > 0) {
            dispatch(setLoading(true))
            dispatch(setResults([]))
            dispatch(setPage(1))
            getSearchResults({ query, orderBy, color }).then((res) => {
                if (res?.data.errors) {
                    console.warn("ERROR", res.data.errors[0])
                    dispatch(setError(true))
                    dispatch(setResults([]))
                    dispatch(setLoading(false))
                }
                if (res?.data?.results) {
                    dispatch(setError(false))
                    dispatch(setResults(res.data.results))
                    dispatch(setLoading(false))
                }
            })
        }
    }, [query, orderBy, color])

    return (
        <SearchPageWrapper data-testid="search-page">
            <SearchBarWrapper>
                <SearchBar />
                <Order />
                <Color />
            </SearchBarWrapper>
            <Photos />
            {results?.length > 0 ?
                <Pages />
            : null}
        </SearchPageWrapper>
    )    
}
