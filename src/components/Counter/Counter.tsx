import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./CounterSlice"

type CounterState = {
  counter: {
    count: number
  }
}

const Counter = () => {
  const count = useSelector((state: CounterState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(30))}>Increment by 30</button>
    </div>
  )
}

export default Counter