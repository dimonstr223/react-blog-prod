import React, { FC, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

import cls from './Navbar.module.scss'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onShowModal = () => setIsAuthModal(true)
  const onCloseModal = () => setIsAuthModal(false)

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <Button
        className={cls.link}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
