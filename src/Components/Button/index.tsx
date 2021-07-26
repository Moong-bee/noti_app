import React from 'react'
import Styled from 'styled-components'

interface ContainerProps {
  readonly type: string
  readonly backgroundColor: string
  readonly hoverColor: string
}
const Container = Styled.div<ContainerProps>`
    text-align: center;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    ${(props) =>
      props.type === 'fill' &&
      `
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: ${props.backgroundColor};
    &:hover{
        background-color: ${props.hoverColor};
    }
    &:active{
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }`}
    ${(props) =>
      props.type === 'underline' &&
      `background-color: transparent;
    `}
`

interface LabelProps {
  readonly type: string
  readonly backgroundColor: string
}
const Label = Styled.div<LabelProps>`
    color: #FFFFFF;
    font-size: 16px;

    ${(props) =>
      props.type === 'underline' &&
      `
      text-decoration: underline;
      text-underline-position: under;
      color: ${props.backgroundColor}
    `}
`

interface Props {
  readonly label: string
  readonly type?: string
  readonly backgroundColor?: string
  readonly hoverColor?: string
  readonly onClick?: () => void
}

export const Button = ({
  label,
  type = 'fill',
  backgroundColor = '#0077b6',
  hoverColor = '#007cbd',
  onClick,
}: Props) => {
  return (
    <Container
      type={type}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}>
      <Label type={type} backgroundColor={backgroundColor}>
        {label}
      </Label>
    </Container>
  )
}
