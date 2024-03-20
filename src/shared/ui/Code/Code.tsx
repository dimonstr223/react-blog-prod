import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon/Icon'

import CopyIcon from 'shared/assets/icons/copy.svg'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code: FC<CodeProps> = ({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <div className={classNames(cls.Code, [className])}>
      <pre>
        <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
          <Icon className={cls.icon} Svg={CopyIcon} />
        </Button>
        <code>
          {text}
        </code>
      </pre>
    </div>
  )
}
