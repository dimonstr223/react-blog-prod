import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { getProfileValidateErrors } from 'entities/Profile'

describe('getProfileValidateErrors.test', () => {
  test('return validation errors', () => {
    const errors = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined)
  })
})
