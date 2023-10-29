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

    @media (max-width: 768px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 425px) {
        grid-template-columns: auto;
    }
`;
