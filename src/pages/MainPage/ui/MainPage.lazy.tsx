import { lazy } from 'react'

export const MainPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => { resolve(import('./MainPage')) }, 1000)
}))
