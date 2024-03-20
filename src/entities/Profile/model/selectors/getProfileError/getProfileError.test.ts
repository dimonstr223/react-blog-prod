import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
  test('return error message', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error message',
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('error message')
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toBe(undefined)
  })
})
