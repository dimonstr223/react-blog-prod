import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())

  return (
    <div>
      <h1 data-testid='value-title'>value = {value}</h1>
      <Button data-testid='incr-btn' onClick={increment}>incr</Button>
      <Button data-testid='decr-btn' onClick={decrement}>decr</Button>
    </div>
  )
}
