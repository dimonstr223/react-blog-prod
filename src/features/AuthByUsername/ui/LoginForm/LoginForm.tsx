import { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginFormInner: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

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
  )
}

export const LoginForm = memo(LoginFormInner)
