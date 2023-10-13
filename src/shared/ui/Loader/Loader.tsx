import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import './Loader.scss'
export const Loader: FC = () => <div className={classNames('lds-ripple')}><div></div><div></div></div>
