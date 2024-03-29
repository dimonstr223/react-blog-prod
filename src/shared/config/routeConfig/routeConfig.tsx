import { RouteProps } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  // last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  // Последний (если ни один из маршрутов не отработал)
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: AppRoutesProps[] = [
  { path: RoutePath.main, element: <MainPage /> },
  { path: RoutePath.about, element: <AboutPage /> },
  {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true
  },
  {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true
  },
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
