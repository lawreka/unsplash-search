"use client"

import { Providers } from "../../redux/providers"

import { SearchPageWrapper } from "./styled"
import { Button } from "../../components/Button"
import { Photos } from "../../components/Photos"

export const SearchPage = () => {
    return (
        <Providers>
            <SearchPageWrapper>
                <Button />
                <Photos />
            </SearchPageWrapper>
        </Providers>
    )    
}
