import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test', () => {
  test('width one param', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toBe('?test=value')
  })

  test('width multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      order: '123',
      search: 'some string'
    })
    expect(params).toBe('?test=value&order=123&search=some+string')
  })

  test('width undefined', () => {
    const params = getQueryParams({
      test: 'value',
      sort: undefined
    })
    expect(params).toBe('?test=value')
  })
})
