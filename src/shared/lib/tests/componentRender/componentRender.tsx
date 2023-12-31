import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import i18nForTesting from '../../../config/i18n/i18nForTesting'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}
export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
  const {
    route = '/',
    initialState,
  } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTesting}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
