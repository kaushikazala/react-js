import React, { useEffect, useState } from 'react'


const App = () => {
  let [count,setData] = useState(0);
  useEffect(()=>{
  },[count])
  return (
    
    <>
      <h1>Count:{count}</h1>
      <button onClick={()=>{
        setData(count+1);
      }}>inc</button>
      <button onClick={()=>{
        setData(count-1)
      }}>dec</button>
    </>
  )
}


export default App
