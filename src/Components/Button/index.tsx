import React from 'react'
import Styled from 'styled-components'

interface ContainerProps {
  readonly backgroundColor: string
  readonly hoverColor: string
}
const Container = Styled.div<ContainerProps>`
    text-align: center;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.backgroundColor};
    &:hover{
        background-color: ${(props) => props.hoverColor};
    }
    &:active{
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`
const Label = Styled.div`
    color: #FFFFFF;
    font-size: 16px;
`

interface Props {
  readonly label: string
  readonly backgroundColor?: string
  readonly hoverColor?: string
  readonly onClick?: () => void
}

export const Button = ({
  label,
  backgroundColor = '#0077b6',
  hoverColor = '#007cbd',
  onClick,
}: Props) => {
  return (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  )
}
