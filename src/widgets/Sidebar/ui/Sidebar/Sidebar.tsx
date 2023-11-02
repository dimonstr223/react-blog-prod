import React, { FC, memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

import { SidebarItemsList } from 'widgets/Sidebar/module/items'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}
    >
      <div className={cls.links}>
        {SidebarItemsList.map(item => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
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
    </div>
  )
})
