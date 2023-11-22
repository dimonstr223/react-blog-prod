import { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './AddCommentForm.module.scss'
import { useSelector } from 'react-redux'
import { getAddCommentError, getAddCommentText } from '../../model/selectors/addCommentSelectors'

const reducers = {
  addComment: addCommentReducer
}

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {
  const { t } = useTranslation('comments')
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentText)
  const error = useSelector(getAddCommentError)

  const onCommentChange = useCallback((value: string) => {
    dispatch(addCommentActions.setCommentText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentChange('')
  }, [onCommentChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers} unmountRemove>
      <div className={classNames(cls.AddCommentForm, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Прокомментируйте')}
          value={text}
          onChange={onCommentChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
