import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors.test', () => {
  test('return validation errors', () => {
    const errors = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined)
  })
})
