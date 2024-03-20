import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleView } from '../../model/types/article'
import ListIcon from 'shared/assets/icons/list.svg'
import TiledIcon from 'shared/assets/icons/tiled.svg'

import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import cls from './ArticleViewSelector.module.scss'

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
]

interface ArticleViewSelectorProps {
  className?: string
  view?: ArticleView
  onViewClick?: (view: ArticleView) => void
}

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, [className])}>
      {
        viewTypes.map(viewType => (
          <Button
            key={viewType.view}
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames('', [], { [cls.selected]: viewType.view === view })}
            />
          </Button>
        ))
      }
    </div>
  )
}
)
