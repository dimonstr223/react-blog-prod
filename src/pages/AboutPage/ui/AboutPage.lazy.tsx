import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => { resolve(import('./AboutPage')) }, 1000)
}))
