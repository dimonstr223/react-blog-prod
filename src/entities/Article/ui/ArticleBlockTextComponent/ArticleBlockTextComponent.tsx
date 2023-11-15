import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleBlockText } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

import cls from './ArticleBlockTextComponent.module.scss'

interface ArticleBlockTextComponentProps {
  className?: string
  block?: ArticleBlockText
}

export const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.ArticleBlockTextComponent, [className])}>
      {block?.title && (
        <Text className={cls.title} title={block.title} />
      )}
      {block?.paragraphs && block.paragraphs.map(paragraph => (
        <Text key={paragraph} className={cls.paragraph} text={paragraph} />
      ))}
    </div>
  )
})
