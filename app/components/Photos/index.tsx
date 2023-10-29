import Pagination from '@mui/material/Pagination';

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getLoading, getPage, getResults, setPage, getError, getQuery } from "../../redux/searchSlice";

import { PhotosWrapper, PhotosGrid, ErrorWrapper } from "./styled"

export const Photos = () => {
    const page = useAppSelector(getPage);
    const dispatch = useAppDispatch();
    const results = useAppSelector(getResults);
    const loading = useAppSelector(getLoading);
    const error = useAppSelector(getError);
    const query = useAppSelector(getQuery);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    }

    if (loading == true) {
        return (
            <PhotosWrapper>
                <PhotosGrid>
                    {results.map((photo, index) => {
                        return (
                            <img
                                key={`loading${index}`}
                                src="/Grey_background.jpeg"
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
                                        key={photo.urls.regular}
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
                if (query.length > 0) {
                    return (
                        <div>No results</div>
                    )
                } else {
                    return (
                        <div>Search for some pictures</div>
                    )
                }
                
            }
        }
    }    
}
