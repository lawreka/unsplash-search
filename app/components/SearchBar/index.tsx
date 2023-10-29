"use client"

import React, { useState } from 'react'

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setQuery, getQuery, setPage, setResults } from '../../redux/searchSlice';

export const SearchBar = () => {
    const query = useAppSelector(getQuery);
    const [searchInput, setSearchInput] = useState(query);
    const dispatch = useAppDispatch();
    
    
    const handleChange = (queryString: string) => {
        setSearchInput(queryString)
    }

    const handleEnter = () => {
        dispatch(setPage(1))
        dispatch(setResults([]))
        dispatch(setQuery(searchInput))
    }

    const handleClear = () => {
        setSearchInput("")
        dispatch(setQuery(""))
    }

    return (
        <TextField
            id="search-input"
            sx={{ flex: 1 }}
            variant="outlined"
            value={searchInput}
            placeholder="Search"
            autoComplete="off"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event.target.value);
            }}
            onKeyUp={(event: React.KeyboardEvent) => {
                if (event.key === "Enter") {
                    handleEnter()
                }
            }}
            InputProps={{
                startAdornment:
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>,
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClear}>
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    </InputAdornment>
            }}
        />
    )
}
