import { FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/types/article'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}
//! ПО АРХИТЕКТУРЕ FSD ЭТИ ТАБЫ ОТНОСЯТСЯ БОЛЬШЕ К ФИЧАМ, БОЛЬШЕ КАК ФУНУЦИОНАЛ, А НЕ СУЩНОСТЬ
//! БЫЛО БЫ ЛУЧШЕ СДЕЛАТЬ ЕГО ОТДЕЛЬНОЙ ИЗОЛРОВАННОЙ ФИЧЕЙ

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ className, value, onChangeType }) => {
  const { t } = useTranslation('article')

  const typeTabs = useMemo<TabItem[]>(() => ([
    {
      value: ArticleType.ALL,
      content: t('Все')
    },
    {
      value: ArticleType.IT,
      content: t('Айти')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука')
    },
  ]), [t])

  const onTabClick = (tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }

  return (
    <Tabs
      className={classNames('', [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  )
}
