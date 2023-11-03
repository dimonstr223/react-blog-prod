import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginPassword.test', () => {
  test('return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '123123' }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123123')
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
