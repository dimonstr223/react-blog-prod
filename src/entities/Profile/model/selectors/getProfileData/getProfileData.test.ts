import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('return data', () => {
    const data = {
      first: 'Dimonstr',
      lastname: '223',
      age: 22,
      currency: Currency.USD,
      country: Country.China,
      city: 'Shanghai',
    }

    const state: DeepPartial<StateSchema> = {
      profile: { data }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toBe(undefined)
  })
})
