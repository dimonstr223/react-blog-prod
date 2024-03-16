import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ArticleDetailsPageHeader.module.scss'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('article')
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, [className])}>
      <Button onClick={onBackToList}>
        {t('Назад к списку статей')}
      </Button>
      { canEdit &&
        <Button onClick={onEditArticle}>
          {t('Редактировать')}
        </Button>
      }
    </div>
  )
}
