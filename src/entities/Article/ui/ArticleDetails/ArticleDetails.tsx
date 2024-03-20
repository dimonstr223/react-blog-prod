import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'

import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'

import cls from './ArticleDetails.module.scss'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleBlockImageComponent } from '../../ui/ArticleBlockImageComponent/ArticleBlockImageComponent'
import { ArticleBlockTextComponent } from '../../ui/ArticleBlockTextComponent/ArticleBlockTextComponent'
import { ArticleBlockCodeComponent } from '../../ui/ArticleBlockCodeComponent/ArticleBlockCodeComponent'

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

interface ArticleDetailsProps {
  className?: string
  id: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)
  let content

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id))
  }, [dispatch, id])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return (
        <ArticleBlockTextComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      )
    case ArticleBlockType.CODE:
      return (
        <ArticleBlockCodeComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      )
    case ArticleBlockType.IMAGE:
      return (
        <ArticleBlockImageComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      )
    default: return null
    }
  }, [])

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        title={t('Ошибка загрузки статьи')}
        align={TextAlign.CENTER}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar className={cls.avatar} src={article?.img} size={200} />
        </div>
        <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={article?.views.toString()} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(block => renderBlock(block))}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} unmountRemove>
      <div className={classNames(cls.ArticleDetails, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
