import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article } from '../../types/article'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchArticleById = createAsyncThunk<
  Article, string, ThunkConfig<string>
>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Article>(`/articles/${articleId}`)

      if (!data) throw new Error()

      return data
    } catch(e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
