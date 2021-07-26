import React from 'react'
import Styled from 'styled-components'

interface ContainerProps {
  readonly type: string
  readonly backgroundColor: string
  readonly hoverColor: string
}
const Container = Styled.div<ContainerProps>`
    display: flex;
    flex: 1l
    align-items: center;
    justify-content: center;
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
    `}
    ${(props) =>
      props.type === 'underline' &&
      `
      background-color: transparent;
    `}
    &:active{
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`

interface LabelProps {
  readonly type: string
  readonly backgroundColor: string
  readonly hoverColor: string
}
const Label = Styled.div<LabelProps>`
    color: #FFFFFF;
    font-size: 16px;

    ${(props) =>
      props.type === 'underline' &&
      `
      text-decoration: underline;
      text-underline-position: under;
      color: ${props.backgroundColor};

      &:hover {
        color: ${props.hoverColor};
      }
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
      <Label type={type} backgroundColor={backgroundColor} hoverColor={hoverColor}>
        {label}
      </Label>
    </Container>
  )
}
