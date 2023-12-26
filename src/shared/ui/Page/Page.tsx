import { FC, memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollByPath, scrollSaveActions } from 'features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
  onScrollEnd?: () => void
  className?: string
  children: ReactNode
}

export const Page: FC<PageProps> = memo(({ className, children, onScrollEnd }) => {
  const wrapperRef     = useRef() as MutableRefObject<HTMLElement>
  const triggerRef     = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch       = useAppDispatch()
  const { pathname }   = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.saveScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop
    }))
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
