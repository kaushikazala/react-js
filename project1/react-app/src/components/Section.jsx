import React, { useEffect, useState } from 'react'

const  Section = () => {

  const [data,setData] = useState()
  const [count , setCount] = useState(0)
      async function getData() {
        try{
            const result = await fetch("https://api.escuelajs.co/api/v1/products")
            const res = await result.json()
            console.log(res);
            setData(res)
        }
        catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
      getData()
    },[count])
    
  return (
    <>
 <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center p-3.5">Product List</h1>
      <div className="grid grid-cols-4  gap-6">
        {data &&
          data.slice(0,20).map((item) => (
            <div
              key={item.id}
            >
              <img
                src={item.images}
                alt={item.title}
                className="  object-cover rounded-md h-[400px] "
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-green-600 font-bold text-lg">${item.price}</p>
            </div>
          ))}
      </div>
    </div>
      
    </>
  )
}

export default Section
