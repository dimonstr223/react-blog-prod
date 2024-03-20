import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginFormLazy = lazy<FC<LoginFormProps>>(async () => import('./LoginForm'))
