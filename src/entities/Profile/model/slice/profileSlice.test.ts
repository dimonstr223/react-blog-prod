import { profileActions, profileReducer, ProfileSchema, updateProfileData } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

const data = {
  first: 'Dimonstr',
  lastname: '223',
  age: 22,
  currency: Currency.USD,
  country: Country.China,
  city: 'Shanghai',
  username: 'admin',
}

describe('profileSlice.test', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true)
      )
    ).toEqual({ readonly: true })
  })

  test('update profile data', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: 'new 123' })
    )).toEqual({ form: { username: 'new 123' } })
  })

  test('cansel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, username: '' }
    }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    })
  })

  test('update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR]
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending )
    ).toEqual({ isLoading: true, validateErrors: undefined })
  })

  test('update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    })
  })
})
