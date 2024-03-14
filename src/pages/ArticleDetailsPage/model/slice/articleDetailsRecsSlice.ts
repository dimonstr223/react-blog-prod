import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsRecsSchema } from '../types/articleDetailsRecsSchema'
import { Article } from 'entities/Article'
import { fetchArticlesRecs } from '../services/fetchArticleRecs/fetchArticleRecs'


const recsAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
})

export const getArticleRecs = recsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsPage?.recs || recsAdapter.getInitialState()
)

const initialState = recsAdapter.getInitialState<ArticleDetailsRecsSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {}
})

const articleDetailsRecsSlice = createSlice({
  name: 'articleDetailsRecsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesRecs.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesRecs.fulfilled, (state, action) => {
        state.isLoading = false
        recsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesRecs.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  reducer: articleDetailsRecReducer,
} = articleDetailsRecsSlice
