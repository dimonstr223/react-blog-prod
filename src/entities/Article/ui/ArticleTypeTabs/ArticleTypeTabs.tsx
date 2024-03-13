import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import cls from './ArticleTypeTabs.module.scss'

interface ArticleTypeTabsProps {
  className?: string
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleTypeTabs, [className])}>
      
    </div>
  )
}
