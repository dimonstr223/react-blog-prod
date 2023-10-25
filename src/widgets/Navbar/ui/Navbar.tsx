import React, { FC, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const openModal = () => setIsAuthModal(true)

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <Button
        className={cls.link}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={openModal}
      >{t('Войти')}</Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque harum quasi quia. Beatae corporis, cumque dicta dolor dolores ducimus et mollitia nihil perferendis quae, repellendus, tempora! Consequuntur, nemo soluta?
      </Modal>
    </div>
  )
}
