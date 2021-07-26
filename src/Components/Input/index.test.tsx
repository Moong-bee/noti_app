import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from './index'

describe('<Input />', () => {
  it('올바른 랜더링 - placeholder', () => {
    const { container } = render(<Input placeholder="default placeholder" />)

    const input = screen.getByPlaceholderText('default placeholder')
    expect(input).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('올바른 랜더링 - value', () => {
    render(<Input value="default value" />)

    const input = screen.getByDisplayValue('default value')
    expect(input).toBeInTheDocument()
  })

  it('input 값 변경', () => {
    render(<Input placeholder="default placeholder" />)

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'default value' } })
    expect(input.value).toBe('default value')
  })
})
