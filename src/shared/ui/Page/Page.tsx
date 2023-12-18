import { FC, memo, MutableRefObject, ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  onScrollEnd?: () => void
  className?: string
  children: ReactNode
}

export const Page: FC<PageProps> = memo(({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
