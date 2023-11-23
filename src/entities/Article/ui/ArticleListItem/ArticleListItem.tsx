import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Article, ArticleBlockText, ArticleBlockType, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye.svg'

import cls from './ArticleListItem.module.scss'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ArticleBlockTextComponent } from 'entities/Article/ui/ArticleBlockTextComponent/ArticleBlockTextComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ className, article, view }) => {
  const { t } = useTranslation('article')
  const [isHovered, bindHover] = useHover()
  const navigate = useNavigate()

  const types = <Text className={cls.types} text={article.type.join(', ')} />
  const img = <img className={cls.img} src={article.img} alt={article.title} />
  const views = (
    <>
      <Text className={cls.views} text={article.views.toString()}/>
      <Icon Svg={EyeIcon} className={cls.viewsIcon} />
    </>
  )

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [navigate, article.id])

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleBlockText

    return (
      <div {...bindHover} className={classNames(cls.ArticleListItem, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={cls.username} text={article.user.username} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <Text className={cls.title} title={article.title} />
          {types}
          {img}
          <ArticleBlockTextComponent className={cls.textBlock} block={textBlock} />
          <div className={cls.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div {...bindHover} className={classNames(cls.ArticleListItem, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imgWrapper}>
          {img}
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={cls.title} title={article.title} />
      </Card>
    </div>
  )
}
