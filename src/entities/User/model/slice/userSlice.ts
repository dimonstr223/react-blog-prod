import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/User'

const initialState: UserSchema = {
  authData: {
    id: '',
    username: ''
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice