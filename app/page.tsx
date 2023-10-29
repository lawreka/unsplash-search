"use client"

import React from 'react'

import { Providers } from 'redux/providers'
import { SearchPage } from 'pages/Search'

export default function Page() {
    return (
        <Providers>
            <SearchPage />
        </Providers>
    )
}
