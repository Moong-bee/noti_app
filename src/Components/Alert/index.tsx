import Styled from 'styled-components'
import color from 'util/color'

interface ContainerProps {
  readonly color_code: string
}
const Container = Styled.div<ContainerProps>`
	background-color: ${(props) => props.color_code};
`

interface LabelProps {}

const Label = Styled.div<LabelProps>`
	color: #FFFFFF;
	font-size: 16px;
`

interface Props {
  readonly variant?: string
  readonly msg?: string
  readonly delay?: number
}

const Alert = ({ variant = 'primary', msg = 'test', delay = 1000 }: Props) => {
  return (
    <Container color_code={color(variant)}>
      <Label>{msg}</Label>
    </Container>
  )
}

export default Alert
