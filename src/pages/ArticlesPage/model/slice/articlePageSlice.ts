import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article, ArticleType, ArticleView, ArticleSortField } from 'entities/Article'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticlesPageSchema } from '../types/articlePage'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { SortOrder } from 'shared/types'

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
  _inited: false,
  limit: 9,
  sort: ArticleSortField.CREATED,
  order: 'asc',
  search: '',
  type: ArticleType.ALL
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
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
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
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = undefined
        state.hasMore = action.payload.length >= state.limit

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
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
