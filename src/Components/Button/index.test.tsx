import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Button } from './index'

describe('<Button />', () => {
  it('올바른 랜더링', () => {
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

  it('background color와 hover color 변경', () => {
    const backgroundColor = '#d00000'
    const hoverColor = '#e00000'
    render(<Button label="삭제" backgroundColor={backgroundColor} hoverColor={hoverColor} />)

    const parent = screen.getByText('삭제').parentElement
    expect(parent).toHaveStyleRule('background-color', backgroundColor)
    expect(parent).toHaveStyleRule('background-color', hoverColor, {
      modifier: ':hover',
    })
  })

  it('버튼 클릭', () => {
    const handleClick = jest.fn()
    render(<Button label="버튼" onClick={handleClick} />)

    const button = screen.getByText('버튼')
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
