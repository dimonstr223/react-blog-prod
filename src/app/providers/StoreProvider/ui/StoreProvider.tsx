import React, { FC, ReactNode } from 'react'
import { ReducersMapObject } from 'redux'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  return <Provider store={store}>{children}</Provider>
}
