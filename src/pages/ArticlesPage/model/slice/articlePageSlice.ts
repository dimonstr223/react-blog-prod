import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entities/Article'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  state => state.articlesPage || articlesAdapter.getInitialState()
)

const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  view: ArticleView.BIG,
  page: 1,
  hasMore: true,
  _inited: false
})

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, state.view)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._inited = true
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = undefined
        articlesAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  actions: articlesPageActions,
  reducer: articlesPageReducer
} = articlesPageSlice
