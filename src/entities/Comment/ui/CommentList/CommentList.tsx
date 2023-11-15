import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { Comment } from '../../model/types/comment'

import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

import cls from './CommentList.module.scss'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo(({ className, comments, isLoading }) => {
  const { t } = useTranslation('comments')

  return (
    <div className={classNames(cls.CommentList, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard className={cls.comment} key={comment.id} comment={comment} isLoading={true} />
        ))
        : <Text text={t('Комментарии отсутствуют')} />
      }
    </div>
  )
})
