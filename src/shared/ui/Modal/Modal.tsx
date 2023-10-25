import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { Portal } from 'shared/ui/Portal/Portal'

import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  }

  const onContentClick = (e:  MouseEvent) => e.stopPropagation()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onEscapeDown = useCallback(
    (e: KeyboardEvent) => e.key === 'Escape' && closeHandler(),
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onEscapeDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onEscapeDown)
    }
  }, [isOpen, onEscapeDown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, [className], mods)}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
