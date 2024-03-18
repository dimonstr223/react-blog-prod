import { FC, lazy } from 'react'

import { AddCommentFormProps } from '../../ui/AddCommentForm/AddCommentForm'

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'))
