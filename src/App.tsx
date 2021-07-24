import React from 'react'
import Styled from 'styled-components'

import { Button } from 'Components'

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
      <Title>로그인</Title>
      <Button label="이메일로 로그인" />
    </Container>
  )
}

export default App
