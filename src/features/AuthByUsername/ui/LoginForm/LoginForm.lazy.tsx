import { FC, lazy } from 'react'
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

export const LoginFormLazy = lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => { resolve(import('./LoginForm')) }, 1000)
}))
