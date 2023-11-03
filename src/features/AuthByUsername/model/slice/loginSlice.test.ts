import { loginReducer, LoginSchema } from 'features/AuthByUsername'
import { loginActions } from './loginSlice'

describe('loginSlice.test', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('admin')
    )).toEqual({ username: 'admin' }
    )
  })

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123')
    )).toEqual({ password: '123' })
  })
})
