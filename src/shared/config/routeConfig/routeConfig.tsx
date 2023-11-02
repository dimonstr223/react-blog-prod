import { RouteProps } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  // last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  // Последний (если ни один из маршрутов не отработал)
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: RouteProps[] = [
  { path: RoutePath.main, element: <MainPage /> },
  { path: RoutePath.about, element: <AboutPage /> },
  { path: RoutePath.profile, element: <ProfilePage /> },
  // last
  { path: RoutePath.not_found, element: <NotFoundPage /> }
]
// export const routeConfig: Record<AppRoutes, RouteProps> = {
//   [AppRoutes.MAIN]: {
//     path: RoutePath.main,
//     element: <AboutPage/>
//   },
//   [AppRoutes.ABOUT]: {
//     path: RoutePath.about,
//     element: <MainPage/>
//   }
// }
