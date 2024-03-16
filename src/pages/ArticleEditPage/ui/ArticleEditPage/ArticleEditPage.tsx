import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'

import cls from './ArticleEditPage.module.scss'
import { useParams } from 'react-router-dom'
import { Page } from 'shared/ui/Page/Page'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('')
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id) // или !!id

  return (
    <Page className={classNames(cls.ArticleEditPage, [className])}>
      {isEdit
        ? 'EDIT PAGE'
        : 'New Article'
      }
    </Page>
  )
}

export default ArticleEditPage
