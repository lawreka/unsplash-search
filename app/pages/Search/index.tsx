"use client"

import { useEffect } from "react"

import { Photos } from "../../components/Photos"
import { SearchBar } from "../../components/SearchBar"
import { Order } from "../../components/Filters/Order"
import { Color } from "../../components/Filters/Color"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setLoading, setResults, setError, getPage, getQuery } from "../../redux/searchSlice"
import { getSearchResults } from "../../lib/search"

import { SearchPageWrapper, SearchBarWrapper } from "./styled"

export const SearchPage = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(getPage);
    const query = useAppSelector(getQuery);

    useEffect(() => {
        if (query.length > 0) {
            dispatch(setLoading(true))
            getSearchResults({ page, query }).then((res) => {
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
    }, [page, query])

    return (
        <SearchPageWrapper>
            <SearchBarWrapper>
                <SearchBar />
                <Order />
                <Color />
            </SearchBarWrapper>
            <Photos />
        </SearchPageWrapper>
    )    
}
