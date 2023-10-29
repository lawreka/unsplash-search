import { Wrapper } from "../styled"

export const NoResults = ({ color, query }) => {
    return (
        <Wrapper data-testid="results-no-results">
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
        </Wrapper>
    )
}
