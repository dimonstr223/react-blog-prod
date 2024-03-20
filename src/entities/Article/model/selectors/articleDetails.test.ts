import { StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from './/articleDetails'

describe('articleDetails.test', () => {
  test('return articleDetails data', () => {
    const data = {
      id: '1',
      title: 'title'
    }

    const state: DeepPartial<StateSchema> = {
      articleDetails: { data }
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('return articleDetails loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: false }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false)
  })

  test('return articleDetails error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: 'error' }
    }
    expect(getArticleDetailsError(state as StateSchema)).toBe('error')
  })
})
