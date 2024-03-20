import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleBlockCode } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

import cls from './ArticleBlockCodeComponent.module.scss'

interface ArticleBlockCodeComponentProps {
  className?: string
  block: ArticleBlockCode
}

export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = memo(({ className, block }) => {

  return (
    <div className={classNames(cls.ArticleBlockCodeComponent, [className])}>
      <Code text={block.code} />
    </div>
  )
})
