import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getLoading, getResults, getPage, getError, getQuery, getColor } from "../../redux/searchSlice";
import { PhotosWrapper, PhotosGrid, GridPlaceholder, ErrorWrapper } from "./styled";

export const Photos = () => {
    const page = useAppSelector(getPage);
    const results = useAppSelector(getResults);
    const [currentPageResults, setCurrentPageResults] = useState([]);
    
    const loading = useAppSelector(getLoading);
    const error = useAppSelector(getError);
    const query = useAppSelector(getQuery);
    const color = useAppSelector(getColor);
    const resultsPlaceholder = [0, 1, 2, 3, 4, 5];
    
    useEffect(() => {
        let pages = [];

        const splitIntoPages = (results, n = 6) => {
            for (let i = 0; i < results.length; i += n) {
                pages.push(results.slice(i, i + n));
            }
        }
        
        if (results.length > 0) {
            splitIntoPages(results);
            setCurrentPageResults(pages[page - 1]);
        }
    }, [page, results])

    if (error === true) {
        return (
            <ErrorWrapper>
                <div>uh oh, something went wrong</div>
                <div>search again?</div>
            </ErrorWrapper>
        )
    } else {
        if (query.length > 0 && results.length > 0) {
            return (
                <PhotosWrapper>
                    <PhotosGrid>
                        {resultsPlaceholder.map((n) => {
                            const key = currentPageResults?.[n]?.id || n;
                            const src = currentPageResults?.[n]?.urls?.regular || "";
                            return (
                                <GridPlaceholder key={key} $src={src} $loading={loading} />
                            )
                        }
                        )}
                    </PhotosGrid>
                </PhotosWrapper>
            )
        } else {
            if (query.length > 0 && results.length < 1 && loading !== true) {
                return (
                    <ErrorWrapper>
                        <img src="./no-photos.png" />
                        {color !== "none" ?
                            (
                                <div>no {color}-colored "{query}" found</div>
                            ) : 
                            (
                                <div>no results for "{query}"</div>
                            )
                        }
                        <div>search again or try adjusting your filters</div>
                    </ErrorWrapper>
                )
            } else {
                if (query.length < 1) {
                    return (
                        <ErrorWrapper>
                            <div>search for photos!</div>
                        </ErrorWrapper>
                    )
                }
            }
        }
        
    }
}
