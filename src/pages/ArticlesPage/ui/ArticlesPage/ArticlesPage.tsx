import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleList } from 'entities/Article'
import { articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { useSearchParams } from 'react-router-dom'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const articles  = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view      = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, [className])}>
        <ArticlesPageFilters />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
