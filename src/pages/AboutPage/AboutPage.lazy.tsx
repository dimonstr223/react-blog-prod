import { lazy } from "react"

const AboutPageLazy = lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(() => res(import('./AboutPage')), 1000)
}))

export default AboutPageLazy
