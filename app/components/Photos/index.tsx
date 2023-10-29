import { useAppSelector } from "../../redux/hooks";
import { getLoading, getResults, getError, getQuery } from "../../redux/searchSlice";
import { PhotosWrapper, PhotosGrid, GridPlaceholder, ErrorWrapper } from "./styled";

export const Photos = () => {
    const results = useAppSelector(getResults);
    const loading = useAppSelector(getLoading);
    const error = useAppSelector(getError);
    const query = useAppSelector(getQuery);
    const resultsPlaceholder = [0, 1, 2, 3, 4, 5];

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
                            const key = results[n]?.id || n;
                            const src = results[n]?.urls?.regular || "";
                            return (
                                <GridPlaceholder key={key} $src={src} $loading={loading} />
                            )
                        }
                        )}
                    </PhotosGrid>
                </PhotosWrapper>
            )
        } else {
            if (query.length > 0) {
                return (
                    <ErrorWrapper>
                        <div>no results for {query}</div>
                        <img src="./no-photos.png" />
                        <div>search again or try adjusting your filters</div>
                    </ErrorWrapper>
                )
            } else {
                return (
                    <ErrorWrapper>
                        <div>search for photos!</div>
                    </ErrorWrapper>
                )
            }
            
        }
        
    }
}
