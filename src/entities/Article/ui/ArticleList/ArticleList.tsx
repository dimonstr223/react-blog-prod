import { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Article, ArticleView } from '../../model/types/article'

import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target
  } = props

  const { t } = useTranslation('articles')

  const renderItems = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} target={target} />
  )

  const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, i) => (
      <ArticleListItemSkeleton className={cls.card} key={i} view={view} />
    ))
  }

  if (!isLoading && !articles?.length) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, [className, cls[view]])}>
      {articles?.length
        ? articles.map(renderItems)
        : null
      }
      {isLoading && getSkeletons(view)}
    </div>
  )
})
