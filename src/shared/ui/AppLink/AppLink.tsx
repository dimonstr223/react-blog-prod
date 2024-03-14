import React, { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, LinkProps } from 'react-router-dom'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  target?: HTMLAttributeAnchorTarget
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, target, ...otherProps } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, [className, cls[theme]])}
      target={target}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
