import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import i18nForTesting from '../../../config/i18n/i18nForTesting'

export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18nForTesting}>
      {component}
    </I18nextProvider>
  )
}
