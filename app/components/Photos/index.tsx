import { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { getLoading, getResults, getPage, getError, getQuery, getColor } from "redux/searchSlice";

import { NoResults } from "./NoResults";
import { Error } from "./Error";
import { PhotosWrapper, PhotosGrid, GridPlaceholder, Wrapper } from "./styled";

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
        
        if (results?.length > 0) {
            splitIntoPages(results);
            setCurrentPageResults(pages[page - 1]);
        } else {
            setCurrentPageResults([])
        }
    }, [page, results])

    const errorState = error === true;
    const loadingState = loading === true;
    const emptyNoQueryYet = !errorState && !loadingState && query.length < 1 && results.length < 1;
    const emptyNoResults = !errorState && !loadingState && query.length > 0 && results.length < 1;
    // const resultsState = loadingState || results.length > 0;

    if (errorState == true) {
        return <Error />
    } else if (emptyNoQueryYet == true) {
        return (
            <Wrapper data-testid="results-no-query">
                <div>search for photos!</div>
            </Wrapper>
        )
    } else if (emptyNoResults == true) {
        return (
            <NoResults color={color} query={query} />
        )
    } else if (loadingState) {
        return (
            <PhotosWrapper data-testid="results-loading">
                <PhotosGrid>
                    {resultsPlaceholder.map((n) => {
                        return (
                            <GridPlaceholder key={`loading-${n}`} $src={""} $loading={loading} />
                        )
                    }
                    )}
                </PhotosGrid>
            </PhotosWrapper>
        )
    } else {
        return (
            <PhotosWrapper data-testid="results-grid">
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
    }
}
