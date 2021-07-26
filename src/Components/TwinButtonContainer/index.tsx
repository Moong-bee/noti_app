import React from 'react'
import Styled from 'styled-components'
import { Button } from 'Components/Button'

const Container = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TwinButtonContainer = () => {
  return (
    <Container>
      <Button label="LButton" type="underline" />
      <Button label="RButton" />
    </Container>
  )
}
