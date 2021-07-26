import React, { useState } from 'react'
import Styled from 'styled-components'

import { Input, Button } from 'Components'

const Container = Styled.div`
    display: flex;
    flex-direction: row;
`
const InputContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
`

export const LoginContainer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (text: string) => {
    setEmail(text)
  }

  const onPasswordChange = (text: string) => {
    setPassword(text)
  }

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Email" onChange={onEmailChange} />
        <Input placeholder="Password" onChange={onPasswordChange} />
      </InputContainer>
      <Button label="Login" />
    </Container>
  )
}
