import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleView } from 'entities/Article'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({ className, view }) => {

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <Skeleton className={cls.img} width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton className={cls.types} width={130} height={16} />
        </div>
        <Skeleton className={cls.title} width={150} height={16} />
      </Card>
    </div>
  )
}
