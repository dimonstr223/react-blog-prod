import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentSlice'

import cls from './ArticleDetailsPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommnetsIsLoading } from '../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const isLoadingComments = useSelector(getArticleCommnetsIsLoading)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} unmountRemove >
      <div className={classNames(cls.ArticleDetailsPage, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <CommentList isLoading={isLoadingComments} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
