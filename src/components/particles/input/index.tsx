import React from 'react'
import * as Styled from "./style";
export interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
    children,
    ...restProps
  }: InputPropsInterface) {
  return (
    <Styled.StyledInput {...restProps} />
  )
}
