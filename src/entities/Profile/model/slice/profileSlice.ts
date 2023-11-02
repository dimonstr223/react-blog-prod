import { ProfileSchema } from 'entities/Profile/model/types/profile'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  readonly: true,
  data: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
