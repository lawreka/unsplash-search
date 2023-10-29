import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getPage, getResults, setPage, setResults } from "../../redux/searchSlice";
import { getSearchResults } from '../../lib/search';

import { PhotosWrapper, PhotosGrid } from "./styled"

export const Photos = () => {
    const page = useAppSelector(getPage);
    const dispatch = useAppDispatch();
    const results = useAppSelector(getResults)

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    }

    useEffect(() => {
        getSearchResults({ page }).then((res) => {
            if (res?.data.errors) {
                console.log("ERROR", res.data.errors[0])
            }
            if (res?.data?.results) {
                dispatch(setResults(res.data.results))
            }
        })
    }, [page])

    if (results.length) {
        return (
            <PhotosWrapper>
                <PhotosGrid>
                    {results.map((photo) => {
                        return (
                            <img
                                src={photo.urls.regular}
                            />
                        )
                    })}
                </PhotosGrid>
                <Pagination
                    count={10}
                    shape="rounded"
                    page={page}
                    onChange={handleChange}
                />
            </PhotosWrapper>

        )
    } else {
        return (
            <div>No results</div>
        )
    }
}
