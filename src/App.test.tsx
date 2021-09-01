import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders Mehtext title', () => {
  render(<App />)
  const textElement = screen.getByText(/mehtext/i)
  expect(textElement).toBeInTheDocument()
})
