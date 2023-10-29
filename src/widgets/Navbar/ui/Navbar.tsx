import React, { FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { getUserAuthData, userActions } from 'entities/User'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const onShowModal = useCallback(() => setIsAuthModal(true), [])
  const onCloseModal = useCallback(() => setIsAuthModal(false), [])

  const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, [className])}>
        <Button
          className={cls.link}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

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
