import React, { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}
    >
      <Button data-testid='sidebar-toggle' theme={ThemeButton.OUTLINE} onClick={onToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
