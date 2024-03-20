import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'

import cls from './ProfileCard.module.scss'

import { Currency } from 'entities/Currency/model/types/currency'
import { CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
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
    data,
    isLoading,
    error,
    readonly,
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
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}

        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Имя')}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Фамилия')}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Возраст')}
          readonly={readonly}
          onChange={onChangeAge}
          type='number'
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город')}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Имя пользователя')}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Аватар')}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
})
