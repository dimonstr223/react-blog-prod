import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { Page } from 'shared/ui/Page/Page'
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice'

import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { getArticleDetailsRecsIsLoading } from '../../model/selectors/recs'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddComment'
import { addCommentToArticle } from '../../model/services/addCommentToArticle/addCommentToArticle'

import cls from './ArticleDetailsPage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticleRecs } from '../../model/slice/articleDetailsRecsSlice'
import { articleDetailsPageReducer } from '../../model/slice'
import { fetchArticlesRecs } from '../../model/services/fetchArticleRecs/fetchArticleRecs'
import { ArticleDetailsPageHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const comments = useSelector(getArticleComments.selectAll)
  const recs = useSelector(getArticleRecs.selectAll)
  const isLoadingComments = useSelector(getArticleCommentsIsLoading)
  const isLoadingRecs = useSelector(getArticleDetailsRecsIsLoading)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticlesRecs())
  })

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentToArticle(text))
  }, [dispatch])

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} unmountRemove >
      <Page className={classNames(cls.ArticleDetailsPage, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text className={cls.recTitle} title={t('Рекомендуем')} />
        <ArticleList
          className={cls.recs}
          articles={recs}
          isLoading={isLoadingRecs}
          view={ArticleView.SMALL}
          target={'_blank'}
        />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoadingComments} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
