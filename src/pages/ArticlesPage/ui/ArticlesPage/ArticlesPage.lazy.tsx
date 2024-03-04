import { lazy } from 'react'

export const ArticlesPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticlesPage')), 400)
}))
