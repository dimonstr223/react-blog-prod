import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from 'entities/Profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'

import cls from './ProfileCard.module.scss'

import { Currency } from 'entities/Currency/model/types/currency'
import { CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  form?: Profile
  isLoading?: boolean
  error?: string
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
  const {
    className,
    form,
    isLoading,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)


  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Ошибка загрузки профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, [className], { [cls.editing]: !readonly })}>
      <div className={cls.data}>
        {form?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={form.avatar} />
          </div>
        )}

        <Input
          className={cls.input}
          value={form?.first}
          placeholder={t('Имя')}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          className={cls.input}
          value={form?.lastname}
          placeholder={t('Фамилия')}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          className={cls.input}
          value={form?.age}
          placeholder={t('Возраст')}
          readonly={readonly}
          onChange={onChangeAge}
          type='number'
        />
        <Input
          className={cls.input}
          value={form?.city}
          placeholder={t('Город')}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          className={cls.input}
          value={form?.username}
          placeholder={t('Имя пользователя')}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          className={cls.input}
          value={form?.avatar}
          placeholder={t('Аватар')}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={form?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={form?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
})
