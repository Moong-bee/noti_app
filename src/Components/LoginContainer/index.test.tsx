import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { LoginContainer } from './index'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from 'config/firebaseConfig'

describe('<LoginContainer />', () => {
  it('renders component correctly', () => {
    const { container } = render(<LoginContainer />)

    const emailInput = screen.getByPlaceholderText('Email')
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()

    const loginButton = screen.getByText('Login')
    expect(loginButton).toBeInTheDocument()

    // expect(container).toMatchSnapshot()
  })

  it('click test', () => {
    render(
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <LoginContainer />
      </FirebaseAuthProvider>,
    )

    const button = screen.getByText('test')
    fireEvent.click(button)
  })
})
