import { useDispatch,useSelector } from "react-redux"
import { decrement, increment, incrementByPayload } from "../../features/CounterSlice"
const Counter = () => {

const dispatch = useDispatch()
    const count = useSelector((state)=>state.Counter.count)
  return (
    <div>
      <h3>count {count}</h3>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementByPayload(10))}>incrementByPayload</button>
    </div>
  )
}

export default Counter
