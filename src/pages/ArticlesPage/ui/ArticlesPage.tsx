import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlePageSlice'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

import cls from './ArticlesPage.module.scss'
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  const articles  = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view      = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
