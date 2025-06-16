import React, { useState } from 'react'

const App = () => {
  const [data , setData] = useState();

   async function getData() {
    try{
      const result = await fetch("https://fakestoreapi.com/products")
      const res = await result.json()
      // console.log(res);
      setData(res)
    }catch(error){
      console.error(error)
    }

   }
   getData()

  return (
    <div>
   {data && data.map((item)=>{
    return(  <div key={item.id}>
        <img src={item.image} height={"200px"} alt=""/>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
         </div>
         )
   })}
    </div>
   
  )
  
}
export default App
