import React from 'react'

import Form from 'components/atoms/form/form-index'
import Container from 'components/atoms/container/container-index'
import Header from 'components/molecules/header/header-index'
import Main from 'components/molecules/main/main-index'
import Button from 'components/particles/button/button-index'
import Input from 'components/particles/input/input-index'
import Logo from 'components/particles/logo/logo-index'

export default function Login() {
  return (
    <>
    <Header>
      <Logo />
    </Header>
    <Main>
      <Container/>
      <Form>
        <Logo/>
        <Input />
        <Button>ENTRAR</Button>
      </Form>
    </Main>
    </>
  )
}
