import { lazy } from "react"

const MainPageLazy = lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(() => res(import('./MainPage')), 1000)
}))

export default MainPageLazy
