import { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Article, ArticleView } from '../../model/types/article'

import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { List, ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'shared/ui/Page/Page'

interface ArticleListProps {
  className?: string
  articles: Article[]
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

  // pzdc knch :|
  const isBig = view === ArticleView.BIG
  const itemsPerRow = isBig ? 1 : 3
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

  const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          className={cls.card}
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
        />
      )
    }

    return (
      <div className={cls.row} key={key} style={style}>
        {items}
      </div>
    )
  }

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
    <WindowScroller
      onScroll={() => console.log('scrolled')}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        scrollTop,
        isScrolling,
        onChildScroll
      }) => (
        <div
          className={classNames(cls.ArticleList, [className, cls[view]])}
          ref={registerChild}
        >
          <List
            autoHeight
            height={height ?? 720}
            rowCount={rowCount}
            rowHeight={isBig ? 720 : 350}
            rowRenderer={rowRenderer}
            width={width ? width - 80 : 700}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
            onScroll={onChildScroll}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
})
