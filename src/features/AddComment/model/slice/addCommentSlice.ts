import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentSchema } from 'features/AddComment'

const initialState: AddCommentSchema = {
  text: undefined,
  error: undefined
}

const addCommentSlice = createSlice({
  initialState,
  name: 'addComment',
  reducers: {
    setCommentText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

export const { actions: addCommentActions } = addCommentSlice
export const { reducer: addCommentReducer } = addCommentSlice
