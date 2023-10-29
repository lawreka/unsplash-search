import { styled } from "styled-components";

export const PhotosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PhotosGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 16px;
    margin: 24px;
    background-color: lavender;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1;
        border-radius: 8px;
    }

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
`;
