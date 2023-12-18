import { MutableRefObject, useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
  useEffect(() => {
    const wrapperEl = wrapperRef.current
    const triggerEl = triggerRef.current

    if (callback) {
      const options = {
        root: wrapperEl,
        rootMargin: '0px',
        threshold: 1.0,
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerEl)

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer && triggerEl && observer.unobserve(triggerEl)
      }
    }
  }, [wrapperRef, triggerRef, callback])
}
