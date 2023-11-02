import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const initialReducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={initialReducers} unmountRemove>
      <div className={classNames('', [className])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
