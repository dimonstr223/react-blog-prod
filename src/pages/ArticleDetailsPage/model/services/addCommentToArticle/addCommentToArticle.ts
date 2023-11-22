import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article'
import {
  fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentToArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentToArticle',
  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !article || !text) return rejectWithValue('no data')

    try {
      const { data } = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!data) throw new Error()

      dispatch(fetchCommentsByArticleId(article.id))

      return data
    } catch(e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
