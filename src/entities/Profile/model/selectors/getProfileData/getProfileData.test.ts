import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from 'entities/Profile'

describe('getProfileData.test', () => {
  test('return data', () => {
    const data = {
      first: 'Dimonstr',
      lastname: '223',
      age: 22,
      currency: Currency.USD,
      country: Country.China,
      city: 'Shanghai',
      username: 'admin',
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toBe(undefined)
  })
})
