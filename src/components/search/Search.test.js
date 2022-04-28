import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from './Search'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('updates on change', () => {
      const onSearch = jest.fn()
      
      const { queryByPlaceholderText } = render(<Search onSearch={onSearch}/>)
  
      const searchInput = queryByPlaceholderText('Search pokemon')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test')
    })
  })