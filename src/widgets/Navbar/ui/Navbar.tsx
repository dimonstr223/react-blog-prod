import React, { FC, memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { getUserAuthData, userActions } from 'entities/User'

import cls from './Navbar.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()

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
    <header className={classNames(cls.Navbar, [className])}>
      <Button
        className={cls.link}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  )
})
