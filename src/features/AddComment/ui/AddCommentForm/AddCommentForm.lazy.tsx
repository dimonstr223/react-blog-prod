import { FC, lazy } from 'react'

import { AddCommentFormProps } from '../../ui/AddCommentForm/AddCommentForm'

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AddCommentForm')), 1000)
}))
