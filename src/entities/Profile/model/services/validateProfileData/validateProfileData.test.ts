import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData'
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

describe('validateProfileData.test', () => {
  test('no errors', () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('invalid first and lastname', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })

  test('invalid age', () => {
    const result = validateProfileData({ ...data, age: 0 })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ])
  })

  test('invalid country', () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })

  test('invalid all', () => {
    const result = validateProfileData({
      ...data, first: '', lastname: '', age: 0, country: undefined
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })

  test('no data', () => {
    const result = validateProfileData(undefined)

    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })
})
