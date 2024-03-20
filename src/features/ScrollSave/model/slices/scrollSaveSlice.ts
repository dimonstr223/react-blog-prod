import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollSaveSchema } from '../types/ScrollSaveSchema'

const initialState: ScrollSaveSchema = {
  scroll: {}
}

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    saveScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } = scrollSaveSlice
