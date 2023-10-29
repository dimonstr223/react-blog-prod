import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string,  }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', authData)

      if (!data) throw new Error()
      
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      thunkAPI.dispatch(userActions.setAuthData(data))

      return data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(i18n.t('Неверный логин или пароль'))
    }
  }
)