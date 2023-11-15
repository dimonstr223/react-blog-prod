import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from 'entities/Profile'

describe('getProfileIsLoading.test', () => {
  test('return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toBe(true)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined)
  })
})
