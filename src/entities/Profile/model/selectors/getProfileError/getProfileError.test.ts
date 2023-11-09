import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from 'entities/Profile'

describe('getProfileError.test', () => {
  test('return error message', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error message',
        readonly: true,
        isLoading: false
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('error message')
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toBe(undefined)
  })
})
