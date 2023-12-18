import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[], FetchArticlesListProps, ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const { page = 1 } = args
    const limit = getArticlesPageLimit(getState())

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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
