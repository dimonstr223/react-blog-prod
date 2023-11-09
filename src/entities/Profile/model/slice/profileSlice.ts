import { Profile, ProfileSchema } from 'entities/Profile/model/types/profile'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData, updateProfileData } from 'entities/Profile'

const initialState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  readonly: true,
  data: undefined,
  form: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload }
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
      state.validateErrors = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.validateErrors = undefined
        state.data = action.payload
        state.form = action.payload
        state.readonly = true
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.validateErrors = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
