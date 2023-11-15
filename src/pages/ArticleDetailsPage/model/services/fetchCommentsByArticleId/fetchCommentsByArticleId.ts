import { createAsyncThunk } from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetailsCommentSlice/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    if (!articleId) return rejectWithValue('error')

    try {
      const { data } = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      return data
    } catch(e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
