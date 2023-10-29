
/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react'
import { SearchPage } from 'pages/Search'
import searchReducer from 'redux/searchSlice'

import { initialState } from 'redux/searchSlice'
import { renderWithProviders } from '../testutils'

describe('Search Page', () => {
    it('renders with initial state', () => {
        renderWithProviders(<SearchPage />, {
            preloadedState: {
                reducer: initialState
            }
        })

        const wrapper = screen.getByTestId('search-page')
        expect(wrapper).toBeInTheDocument()
    })
})
