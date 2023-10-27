import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autofocus?: boolean
}

const InputInner: FC<InputProps> = (props) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autofocus) inputRef.current.focus()
  }, [autofocus])

  return (
    <label className={classNames(cls.Input, [className])}>
      {placeholder && <div>{placeholder}</div>}
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        ref={inputRef}
        {...otherProps}
      />
    </label>
  )
}

export const Input = memo(InputInner)
