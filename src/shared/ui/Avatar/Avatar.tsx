import { CSSProperties, FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100
  }), [size])

  return (
    <img
      className={classNames(cls.Avatar, [className])}
      src={src}
      alt={alt}
      style={styles}
    />
  )
}
