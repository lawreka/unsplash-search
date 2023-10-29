import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getLoading, getPage, getResults, setPage, setResults, getError, setLoading, setError } from "../../redux/searchSlice";
import { getSearchResults } from '../../lib/search';

import { PhotosWrapper, PhotosGrid, ErrorWrapper } from "./styled"

export const Photos = () => {
    const page = useAppSelector(getPage);
    const dispatch = useAppDispatch();
    const results = useAppSelector(getResults);
    const loading = useAppSelector(getLoading);
    const error = useAppSelector(getError);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    }

    useEffect(() => {
        dispatch(setLoading(true))
        getSearchResults({ page }).then((res) => {
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
    }, [page])

    if (loading == true) {
        return (
            <PhotosWrapper>
                <PhotosGrid>
                    {results.map((photo) => {
                        return (
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Grey_background.jpg"
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
        if (error == true) {
            return (
                <ErrorWrapper>
                    <div>
                        Oh no! Something went wrong :(
                    </div>
                    <div>
                        Try to search again?
                    </div>
                </ErrorWrapper>
            )
        } else {
            if (results.length > 0) {
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
    }    
}
