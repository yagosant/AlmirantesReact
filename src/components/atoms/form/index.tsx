import { StyledButton } from 'components/particles/button'
import React from 'react'
import { StyledForm } from './style';
export interface FormPropsInterface
  extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function Form({
    children,
    ...restProps
  }: FormPropsInterface) {
  return (
    <StyledForm {...restProps}>
        <StyledButton>ENTRAR</StyledButton>
    </StyledForm>
  )
}
