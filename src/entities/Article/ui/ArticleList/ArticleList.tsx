import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Article, ArticleView } from '../../model/types/article'

import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props

  const { t } = useTranslation()

  const renderItems = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  )

  const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, i) => (
      <ArticleListItemSkeleton className={cls.card} key={i} view={view} />
    ))
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, [className, cls[view]])}>
      {articles?.length
        ? articles.map(renderItems)
        : null
      }
    </div>
  )
})
