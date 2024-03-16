import { lazy } from 'react'

export const ArticleEditPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleEditPage')), 400)
}))
