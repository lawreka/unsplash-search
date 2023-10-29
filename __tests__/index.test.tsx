
/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react'
import { SearchPage } from 'pages/Search'
import { initialState } from 'redux/searchSlice'
import { Photos } from 'components/Photos'
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
            }
        })

        const pagination = screen.queryByTestId('pagination')
        expect(pagination).toBeInTheDocument()
    })
})

describe('Photos', () => {
    it('renders search for photos!', () => {
        renderWithProviders(<Photos />, {
            preloadedState: {
                ...initialState,
            }
        })

        const start = screen.getByTestId('results-no-query')
        expect(start).toBeInTheDocument();
        const error = screen.queryByTestId('results-error')
        expect(error).toBeNull()        
        const empty = screen.queryByTestId('results-no-results')
        expect(empty).toBeNull()
        const loading = screen.queryByTestId('results-loading')
        expect(loading).toBeNull()
        const results = screen.queryByTestId('results-grid')
        expect(results).toBeNull()
    })
    it('renders error', () => {
        renderWithProviders(<Photos />, {
            preloadedState: {
                ...initialState,
                error: true
            }
        })

        const error = screen.getByTestId('results-error')
        expect(error).toBeInTheDocument();
        const start = screen.queryByTestId('results-no-query')
        expect(start).toBeNull()
        const empty = screen.queryByTestId('results-no-results')
        expect(empty).toBeNull()
        const loading = screen.queryByTestId('results-loading')
        expect(loading).toBeNull()
        const results = screen.queryByTestId('results-grid')
        expect(results).toBeNull()
    })

    it('renders no results', () => {
        renderWithProviders(<Photos />, {
            preloadedState: {
                ...initialState,
                query: "meow"
            }
        })

        const empty = screen.getByTestId('results-no-results')
        expect(empty).toBeInTheDocument();
        const error = screen.queryByTestId('results-error')
        expect(error).toBeNull()
        const start = screen.queryByTestId('results-no-query')
        expect(start).toBeNull()
        const loading = screen.queryByTestId('results-loading')
        expect(loading).toBeNull()
        const results = screen.queryByTestId('results-grid')
        expect(results).toBeNull()
    })
    it('renders loading', () => {
        renderWithProviders(<Photos />, {
            preloadedState: {
                ...initialState,
                loading: true
            }
        })

        const loading = screen.getByTestId('results-loading')
        expect(loading).toBeInTheDocument()
        const empty = screen.queryByTestId('results-no-results')
        expect(empty).toBeNull()
        const error = screen.queryByTestId('results-error')
        expect(error).toBeNull()
        const start = screen.queryByTestId('results-no-query')
        expect(start).toBeNull()
        const results = screen.queryByTestId('results-grid')
        expect(results).toBeNull()
    })
    it('renders results', () => {
        renderWithProviders(<Photos />, {
            preloadedState: {
                ...initialState,
                results: [{ id: 123, urls: { regular: "1" }, description: "1" }]
            }
        })

        const results = screen.getByTestId('results-grid')
        expect(results).toBeInTheDocument() 
        const empty = screen.queryByTestId('results-no-results')
        expect(empty).toBeNull()
        const error = screen.queryByTestId('results-error')
        expect(error).toBeNull()
        const start = screen.queryByTestId('results-no-query')
        expect(start).toBeNull()
        const loading = screen.queryByTestId('results-loading')
        expect(loading).toBeNull()
    })
})
