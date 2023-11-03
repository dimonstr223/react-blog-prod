import React, { ButtonHTMLAttributes, FC, memo } from 'react'
import { classNames, ModsType } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props

  const additional = [className, cls[theme], cls[size]]
  const mods: ModsType = { [cls.square]: square, [cls.disabled]: disabled }

  return (
    <button
      type="button"
      className={classNames(cls.Button, additional, mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
