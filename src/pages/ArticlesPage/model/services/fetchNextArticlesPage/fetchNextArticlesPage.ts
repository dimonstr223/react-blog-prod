import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../slice/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading, getArticlesPageNum
} from '../../selectors/articlesPageSelectors'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI

    const hasMore   = getArticlesPageHasMore(getState())
    const isLoading = getArticlesPageIsLoading(getState())
    const page      = getArticlesPageNum(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({ page: page + 1 }))
    }
  })
