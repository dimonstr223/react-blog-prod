import React, { FC, memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import { getSidebarItems } from '../../model/selectors/getSidebarItems'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }
  const sidebarItemsList = useSelector(getSidebarItems)

  const itemsList = useMemo(() => sidebarItemsList.map(item => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [sidebarItemsList, collapsed])

  return (
    <menu
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}
    >
      <div className={cls.links}>
        {itemsList}
      </div>
      <Button
        data-testid='sidebar-toggle'
        className={cls.collapseBtn}
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </menu>
  )
})
