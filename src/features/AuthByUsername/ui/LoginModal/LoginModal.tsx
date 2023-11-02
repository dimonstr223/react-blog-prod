import { FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormLazy } from 'features/AuthByUsername/ui/LoginForm/LoginForm.lazy'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean,
  onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, className }) => {

  return (
    <Modal
      className={classNames('', [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />} >
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
