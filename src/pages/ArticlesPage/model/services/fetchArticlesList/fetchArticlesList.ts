import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article, ArticleType } from 'entities/Article'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors'
import { addQueryParams } from 'shared/lib/url/addQueryParams'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[], FetchArticlesListProps, ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const limit = getArticlesPageLimit(getState())
    const order = getArticlesPageOrder(getState())
    const sort = getArticlesPageSort(getState())
    const search = getArticlesPageSearch(getState())
    const type = getArticlesPageType(getState())
    const page = getArticlesPageNum(getState())


    try {
      addQueryParams({
        sort, order, search, type
      })
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _order: order,
          _sort: sort,
          _page: page,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        }
      })

      if (!data) throw new Error()

      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
