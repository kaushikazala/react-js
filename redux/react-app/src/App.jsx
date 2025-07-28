import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, incrementByAmount, reset } from './redux/features/counter/counterSlice'
import Child from './compnenets/Child'
import './App.css';


const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  
  const [amount,setAmount] = useState(0)
  return (
    <>
         <div>
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(inc())}>Inc</button>
      <button onClick={()=>dispatch(dec())}>Dec</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <input type="number" onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={()=>dispatch(incrementByAmount(amount))}>Add by Amount</button>
      <Child/>
    </div>  
    </>  
  )
}

export default App
