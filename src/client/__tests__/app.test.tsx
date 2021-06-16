import React from 'react'
import { render, screen } from '@testing-library/react'

import { App } from '../app'

test('renders the app', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toHaveTextContent('React Test')
})
