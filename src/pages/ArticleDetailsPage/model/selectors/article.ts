import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthData } from 'entities/User'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) return false

    // return article.userId === user.id // userId есть, но мы почему-то не используем :O
    return article.user.id === user.id
  }
)
