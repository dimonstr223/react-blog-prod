import { FC, ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { Card, CardTheme } from '../Card/Card'

import cls from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs, value, onTabClick } = props

  // Благадораря замыканию получаем из параметров именно tab, а не event
  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <div className={classNames(cls.Tabs, [className])}>
      {tabs.map(tab => (
        <Card
          className={cls.tab}
          key={tab.value}
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
