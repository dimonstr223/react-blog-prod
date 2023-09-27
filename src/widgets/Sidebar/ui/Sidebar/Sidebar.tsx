import React, {FC, useState} from 'react';
import classNames from "shared/lib/classNames/classNames";

import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true)
  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
