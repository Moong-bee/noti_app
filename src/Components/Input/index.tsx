import React from 'react'
import Styled from 'styled-components'

const InputBox = Styled.input`
    flex: 1;
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    outline: none;
`

interface Props {
  readonly placeholder?: string
  readonly value?: string
  readonly onChange?: (text: string) => void
  readonly type?: string
}
export const Input = ({ placeholder, value, onChange, type = 'text' }: Props) => {
  return (
    <InputBox
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (typeof onChange === 'function') {
          onChange(e.target.value)
        }
      }}
    />
  )
}
