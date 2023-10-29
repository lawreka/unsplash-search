import { styled } from "styled-components";

export const PhotosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const PhotosGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: auto auto auto;
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 425px) {
        grid-template-columns: auto;
    }
`;

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    img {
        width: 200px;
        height: auto;
    }
`;


export const GridPlaceholder = styled.div<{
    $loading: boolean;
    $src: string;
}>`
    display: flex;
    width: 100%;
    height: 100%;
    background: ${(props) => props.$src ? `url(${props.$src})` : "lightgrey"};
    background-color: ${(props) => props.$src ? "lightgrey" : "transparent"};
    aspect-ratio: 1;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
