import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
  test('return form data', () => {
    const formData = {
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
        form: formData
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(formData)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileForm(state as StateSchema)).toBe(undefined)
  })
})
