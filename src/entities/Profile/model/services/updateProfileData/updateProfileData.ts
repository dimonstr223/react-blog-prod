import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<
  Profile, void, ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const { data } = await extra.api.put('/profile', formData)

      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
