import React, { useState } from 'react'
import Styled from 'styled-components'
import { Input, Button } from 'Components'
import firebase from 'firebase/app'
import 'firebase/auth'

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
  const [userInformation, setUserInformation] = useState({})

  const onEmailChange = (text: string) => {
    setEmail(text)
  }

  const onPasswordChange = (text: string) => {
    setPassword(text)
  }

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          console.log(res.user)
          const { displayName, email, emailVerified, uid } = res.user

          console.log(displayName, email, emailVerified, uid)
        }
      })
  }

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Email" onChange={onEmailChange} />
        <Input type="password" placeholder="Password" onChange={onPasswordChange} />
      </InputContainer>
      <Button label="Login" onClick={onLogin} />
    </Container>
  )
}
