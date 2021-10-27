import { useState } from 'react'
import Styled from 'styled-components'
import { Input, Button } from 'Components'
import firebase from 'firebase/app'
import 'firebase/auth'
import error_handler from 'util/error_handler'
import Alert from 'Components/Alert'

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
  const [error, setError] = useState({ status: false, msg: '', origin: '' })

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
          const { displayName, email, emailVerified, uid } = res.user

          console.log(displayName, email, emailVerified, uid)
        }
      })
      .catch((err) =>
        setError({
          status: true,
          msg: error_handler(err),
          origin: err,
        }),
      )
  }

  return (
    <>
      <Container>
        <InputContainer>
          <Input placeholder="Email" onChange={onEmailChange} />
          <Input type="password" placeholder="Password" onChange={onPasswordChange} />
        </InputContainer>
        <Button label="Login" onClick={onLogin} />
      </Container>
      {error.status === true && <Alert msg={error.msg} variant="primary" />}
      {error.status === true && <Alert msg={error.msg} variant="danger" />}
      {error.status === true && <Alert msg={error.msg} variant="success" />}
      {error.status === true && <Alert msg={error.msg} variant="warning" />}
      {error.status === true && <Alert msg={error.msg} variant="info" />}
      {error.status === true && <Alert msg={error.msg} variant="secondary" />}
    </>
  )
}
