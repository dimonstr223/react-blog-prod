import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()
  const toggle = async () => await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button
      onClick={toggle}
      className={classNames(cls.LangSwitcher, [className])}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  )
}
