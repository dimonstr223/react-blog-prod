import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const initialState = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {}
})

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action:PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentSlice
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentSlice
