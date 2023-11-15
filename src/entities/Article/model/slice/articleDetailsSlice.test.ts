import { ArticleDetailsSchema } from 'entities/Article'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'

describe('articleDetailsSlice.test', () => {
  test('fetch article service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false }

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({ isLoading: true, error: undefined })
  })

  // test('fetch article service fulfilled', () => {
  //   const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true }
  //   const data = {}
  //
  //   expect(
  //     articleDetailsReducer(
  //       state as ArticleDetailsSchema,
  //       fetchArticleById.fulfilled(1, '')
  //     )
  //   ).toEqual({
  //
  //   })
  // } )
})
