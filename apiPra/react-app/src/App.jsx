import React, { useEffect, useState } from 'react'

const App = () => {

  const [data,setData] = useState()
  async function showData () {
    try{
      let res = await fetch("https://fakestoreapi.com/products/")
      let result = await res.json()
      console.log(result);
      setData(result)
    }
    catch(error){
      console.log(error); 
    }
  }
   
  useEffect(()=>{
    showData()
  },[])
  
  return (
    <>
     {data && data.map((item)=>{
      return(
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt="" height={"200px"}/>
          <h4>$:{item.price}</h4>
        </div>
      )
     })}
    </>
  )
}

export default App
