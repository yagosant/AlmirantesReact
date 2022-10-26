
import Form from 'components/atoms/form/form-index'
import Button from 'components/particles/button/button-index'
import Input from 'components/particles/input/input-index'
import Logo from 'components/particles/logo/logo-index'
import React from 'react'

export default function Login() {
  return (
    <Form>
      <Logo/>
      <Input />
      <Button>ENTRAR</Button>
    </Form>
  )
}
