import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector } from 'entities/Article'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articlesPageActions } from '../../model/slice/articlePageSlice'
import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'

import cls from './ArticlesPageFilters.module.scss'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({ className }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  return (
    <div className={classNames(cls.ArticlesPageFilters, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')} />
      </Card>
    </div>
  )
}
