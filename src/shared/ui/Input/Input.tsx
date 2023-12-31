import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autofocus?: boolean
  readonly?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autofocus) inputRef.current?.focus()
  }, [autofocus])

  return (
    <label className={classNames(cls.Input, [className], { [cls.readonly]: readonly })}>
      {placeholder && <div>{placeholder}</div>}
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        ref={inputRef}
        readOnly={readonly}
        {...otherProps}
      />
    </label>
  )
})
