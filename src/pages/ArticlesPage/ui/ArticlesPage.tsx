import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.ArticlesPage, [className])}>
      ARTICLEs
    </div>
  )
}

export default ArticlesPage
