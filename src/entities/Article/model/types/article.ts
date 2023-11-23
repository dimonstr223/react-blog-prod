import { User } from 'entities/User'

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface ArticleBlockBase {
  id: string,
  type: ArticleBlockType,
}

export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  user: User
  type: ArticleType[]
  blocks: ArticleBlock[]
}
