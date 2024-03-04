import { ChangeEvent, FC, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props

  const optionList = useMemo(() => options?.map(item => (
    <option
      className={cls.option}
      key={item.value}
      value={item.value}
    >
      {item.content}
    </option>
  )), [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  return (
    <div className={classNames(cls.Select, [className])}>
      {label && <div className={cls.label}>{label}</div>}

      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  )
}
