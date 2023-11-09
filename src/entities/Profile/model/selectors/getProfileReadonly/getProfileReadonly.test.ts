import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from 'entities/Profile'

describe('getProfileReadonly.test', () => {
  test('return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
        isLoading: false
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toBe(false)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileReadonly(state as StateSchema)).toBe(undefined)
  })
})
