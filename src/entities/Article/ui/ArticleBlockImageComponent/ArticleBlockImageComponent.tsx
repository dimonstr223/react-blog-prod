import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleBlockImage } from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

import cls from './ArticleBlockImageComponent.module.scss'

interface ArticleBlockImageComponentProps {
  className?: string
  block: ArticleBlockImage
}

export const ArticleBlockImageComponent: FC<ArticleBlockImageComponentProps> = memo(({ className, block }) => {

  return (
    <div className={classNames(cls.ArticleBlockImageComponent, [className])}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
})
