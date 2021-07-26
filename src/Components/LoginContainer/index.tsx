import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { Input, Button } from 'Components'
import firebase from 'firebase'

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

  const getUser = () => {
    const user = firebase.auth().currentUser
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName
      const email = user.email
      const photoURL = user.photoURL
      const emailVerified = user.emailVerified

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid

      console.log(displayName, email, photoURL, emailVerified, uid)

      user
        .updateProfile({
          displayName: '테스터',
        })
        .then(() => {
          console.log('Success!')
        })

      if (!emailVerified) {
        user.sendEmailVerification().then((res) => console.log('Success!', res))
      }
    }
  }

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Email" onChange={onEmailChange} />
        <Input placeholder="Password" onChange={onPasswordChange} />
      </InputContainer>
      <Button label="Login" onClick={onLogin} />

      <Button label="test" onClick={getUser} />
    </Container>
  )
}
