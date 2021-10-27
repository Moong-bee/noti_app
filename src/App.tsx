import React from 'react'
import Styled from 'styled-components'

import { Button, LoginContainer } from 'Components'

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = Styled.div``

const App = () => {
  return (
    <Container>
      <LoginContainer />
    </Container>
  )
}

export default App
