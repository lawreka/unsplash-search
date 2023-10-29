import { styled } from "styled-components";

export const SearchPageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
`;

export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
