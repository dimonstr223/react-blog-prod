import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile, ValidateProfileError } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile, void, ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)

    if (errors.length) return rejectWithValue(errors)

    try {
      const { data } = await extra.api.put('/profile', formData)

      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
