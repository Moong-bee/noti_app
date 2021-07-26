import React from 'react'
import { render, screen } from '@testing-library/react'

import { TwinButtonContainer } from './index'

describe('<TwinButtonContainer /.', () => {
  it('올바른 랜더링', () => {
    const { container } = render(<TwinButtonContainer />)

    const LButton = screen.getByText('LButton')
    const RButton = screen.getByText('RButton')

    expect(LButton).toBeInTheDocument()
    expect(RButton).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
