import { FC, MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, ModsType } from 'shared/lib/classNames/classNames'

import { Portal } from 'shared/ui/Portal/Portal'

import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>() as MutableRefObject<ReturnType<typeof setTimeout>>

  const mods: ModsType = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  }

  useEffect(() => {
    if (isOpen) setIsMounted(true)
  }, [isOpen])

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

  if (lazy && !isMounted) return null

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
