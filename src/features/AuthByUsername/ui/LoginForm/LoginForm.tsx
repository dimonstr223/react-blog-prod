import { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginFormInner: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const username  = useSelector(getLoginUsername)
  const password  = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error     = useSelector(getLoginError)

  const onChangeUsername = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch]
  )

  const onLoginClick = useCallback(
    () => dispatch(loginByUsername({ username, password })),
    [dispatch, username, password]
  )

  return (
    <DynamicModuleLoader reducers={initialReducers} unmountRemove>
      <div className={classNames(cls.LoginForm, [className])}>
        <Text title={t('Авторизация')} />
        {error && <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR} />}

        <Input
          type="text"
          placeholder={t('Логин')}
          onChange={onChangeUsername}
          autofocus
        />
        <Input
          type="text"
          onChange={onChangePassword}
          placeholder={t('Пароль')}
        />
        <Button
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

const LoginForm = memo(LoginFormInner)
export default LoginForm
