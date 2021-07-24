import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Button } from './index'

describe('<Button />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Button label="버튼" />)

    const label = screen.getByText('버튼')
    expect(label).toBeInTheDocument()

    const parent = label.parentElement
    expect(parent).toHaveStyleRule('background-color', '#0077b6')
    expect(parent).toHaveStyleRule('background-color', '#007cbd', {
      modifier: ':hover',
    })

    expect(container).toMatchSnapshot()
  })
})
