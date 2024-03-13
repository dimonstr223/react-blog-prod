import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entities/Article'
import { SortOrder } from 'shared/types'
import { ArticleSortField, ArticleType } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  view: ArticleView
  // pagination
  page: number
  limit: number
  hasMore: boolean

  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _inited: boolean
}
