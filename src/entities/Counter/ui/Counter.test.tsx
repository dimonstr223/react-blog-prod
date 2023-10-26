import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'
import { Counter } from 'entities/Counter'
import { userEvent } from '@storybook/testing-library'

describe('Counter.test', () => {
  test('have counter value text', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('have incremented text', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    userEvent.click(screen.getByTestId('incr-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('have decremented text', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    userEvent.click(screen.getByTestId('decr-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
