import React from 'react'
import { render, screen } from '@testing-library/react'

import { LoginContainer } from './index'

describe('<LoginContainer />', () => {
  it('renders component correctly', () => {
    render(<LoginContainer />)
  })
})
