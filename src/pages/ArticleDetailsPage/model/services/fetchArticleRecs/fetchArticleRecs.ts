import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchArticlesRecs = createAsyncThunk<
  Article[], void, ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
        },
      })

      if (!data) throw new Error()

      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
