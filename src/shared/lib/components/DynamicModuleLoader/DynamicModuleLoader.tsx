import { FC, useEffect } from 'react'
import { Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

export type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  unmountRemove?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, unmountRemove } = props
  const { reducerManager } = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  // Асинхронно добавляем редюсер для асинхронного комп-та LoginForm
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })
    return () => {
      if (unmountRemove) {
        Object.entries(reducers).forEach(([name, _]: ReducersListEntry) => {
          reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return <>{children}</>
}
