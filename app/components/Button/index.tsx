"use client"

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPage, setResults } from "../../redux/searchSlice";

import { getSearchResults } from "../../lib/search";

export const Button = () => {
    const page = useAppSelector(getPage);
    const dispatch = useAppDispatch();

    const handleClick = async () => {
        getSearchResults({ page }).then((res) => {
            if (res?.data?.errors) {
                console.log("ERROR", res.data.errors[0])
            }
            if (res?.data?.results) {
                dispatch(setResults(res.data.results))
            }
        })
    }
    return <button onClick={handleClick}>Click</button>
}
