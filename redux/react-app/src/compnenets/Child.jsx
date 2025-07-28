import React from 'react'
import { useSelector } from 'react-redux'

const Child = () => {
    const number = useSelector((state)=>state.counter.value)
    
  return (
    <div>
 
    </div>
  )
}

export default Child
