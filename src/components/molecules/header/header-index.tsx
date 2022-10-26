import React from "react";
import { StyledHeader } from "./header-style";

export interface HeaderPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Header({
  children,
  ...restProps
}: HeaderPropsInterface){
  return (
    <StyledHeader {...restProps}>{children}</StyledHeader>
  )
}