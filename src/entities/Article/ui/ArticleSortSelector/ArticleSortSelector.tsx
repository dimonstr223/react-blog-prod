import { FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import cls from './ArticleSortSelector.module.scss'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/article'
import { SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = ({ className, sort, order, onChangeSort, onChangeOrder }) => {
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам')
    }
  ], [t])

  return (
    <div className={classNames(cls.ArticleSortSelector, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортирвоать по')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
}
