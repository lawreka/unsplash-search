
/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react'
import { SearchPage } from 'pages/Search'
import { initialState } from 'redux/searchSlice'

import { renderWithProviders } from '../testutils'

jest.mock("../app/lib/search", () => {
    return {
        getSearchResults: jest.fn(() => Promise.resolve({ data: [] }))
    };
});

describe('Search Page', () => {
    it('renders with initial state', () => {
        renderWithProviders(<SearchPage />, {
            preloadedState: {
                ...initialState,
            }
        })

        const wrapper = screen.getByTestId('search-page')
        expect(wrapper).toBeInTheDocument();
        const searchBar = screen.getByTestId('search-input')
        expect(searchBar).toBeInTheDocument();
        const orderFilter = screen.getByTestId('order-filter')
        expect(orderFilter).toBeInTheDocument();
        const colorFilter = screen.getByTestId('color-filter')
        expect(colorFilter).toBeInTheDocument();
        const pagination = screen.queryByTestId('pagination')
        expect(pagination).toBeNull();
    })
    it('renders pagination when there are results', () => {
        renderWithProviders(<SearchPage />, {
            preloadedState: {
                ...initialState,
                results: [{ id: 123, urls: { regular: "1" }, description: "1" }],
                query: "meow"

            }
        })

        const pagination = screen.queryByTestId('pagination')
        expect(pagination).toBeInTheDocument()
    })
})
