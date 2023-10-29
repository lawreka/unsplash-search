import { Wrapper } from "../styled"

export const Error = () => {
    return (
        <Wrapper data-testid="results-error">
            <img src="./no-photos.png" />
            <div>uh oh, something went wrong</div>
            <div>search again?</div>
        </Wrapper>
    )
}
